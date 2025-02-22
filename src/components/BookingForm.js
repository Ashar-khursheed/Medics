import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to import axios

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        medicalType: '',
        clinicLocation: '',
        date: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        taxiCouncil: '',
        birthYear: '',
        noPromotion: false,
        paymentType: 'depositOnly', // Default to 'depositOnly'
    });
    const [timeSlots, setTimeSlots] = useState([]);
    const [loading, setLoading] = useState(true); // Default to true while data is loading

    const [clinics, setClinics] = useState([]);
    const [services, setServices] = useState([]);
    const today = new Date().toISOString().split('T')[0];

    const [error, setError] = useState('');

    // Fetch services data
    useEffect(() => {
        fetch('https://medics-admin.themarketingfactory.co.uk/api/all-services')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.all_services) {
                    setServices(data.all_services);
                } else {
                    console.error('No services data found or malformed response');
                }
            })
            .catch((error) => {
                console.error('Error fetching services:', error);
            });
    }, []);

    // Fetch clinic data
    // Fetch clinic data
    // Fetch clinic data
    useEffect(() => {
        axios
            .get('https://medics-admin.themarketingfactory.co.uk/api/clinics')
            .then((response) => {
                if (response.data.success) {
                    setClinics(response.data.clinics); // Set the fetched clinics (doctors)
                    setLoading(false); // Stop the loading state
                } else {
                    // Handle failure case
                    console.error('Failed to fetch clinics');
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching clinics:', error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this runs only once when the component mounts
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    // Function to format a date to YYYY-MM-DD format
    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Add leading 0 if month < 10
        const day = d.getDate().toString().padStart(2, '0'); // Add leading 0 if day < 10
        return `${year}-${month}-${day}`;
    };

    const handleContinue = () => {
        if (step === 1) {
            if (!formData.medicalType || !formData.clinicLocation) {
                alert('Please fill out both fields to continue.');
                return;
            }
        } else if (step === 2) {
            if (!formData.date) {
                alert('Please select a date.');
                return;
            }
        } else if (step === 3) {
            if (!timeSlots.some(slot => slot.selected)) {
                alert('Please select a time slot.');
                return;
            }
        }
        setStep(prevStep => prevStep + 1);
    };
    // Handle date change
    const handleDateChange = (e) => {
        // Ensure the selected date is in the correct format (YYYY-MM-DD)
        const formattedDate = formatDate(e.target.value);  // Apply formatting
        setFormData({ ...formData, date: formattedDate });
    };

    // Fetch time slots after selecting a date
    const fetchTimeSlots = async (selectedDate) => {
        setLoading(true);
        setError('');
        try {
            // const response = await axios.get(
            //     `https://medics-admin.themarketingfactory.co.uk/api/slots?adminAppointmentDoctorId=1&date=${selectedDate}&timezone_offset_minutes=300`
            // );
            const response = await axios.get(
                `https://medics-admin.themarketingfactory.co.uk/api/slots?adminAppointmentDoctorId=${formData.clinicLocation}&date=${selectedDate}&timezone_offset_minutes=300`
            );
            

            // Access the slots through response.data.data.slots
            if (response.data.data && response.data.data.slots) {
                // Convert the string slots into objects with time and selected properties
                const formattedSlots = response.data.data.slots.map(slot => ({
                    time: slot,
                    selected: false
                }));
                setTimeSlots(formattedSlots);
            } else {
                setTimeSlots([]); // If no slots, set an empty array
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to fetch time slots. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    // Move to step 2 (time selection) after selecting the date
    const handleDateContinue = async () => {
        if (formData.date) {
            await fetchTimeSlots(formData.date);
            setStep(3); // Only move to step 3 after fetching slots
        } else {
            alert('Please select a date.');
        }
    };
    // Update this part for step transition
    useEffect(() => {
        if (!loading && timeSlots.length > 0 && formData.date) {
            setStep(3);  // Go to step 3 after time slots are available
        }
    }, [loading, timeSlots, formData.date]);

    // Handle time slot selection
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Update handleSlotSelect
    const handleSlotSelect = (index) => {
        const newTimeSlots = timeSlots.map((slot, idx) => ({
            ...slot,
            selected: idx === index
        }));
        setTimeSlots(newTimeSlots);
        setSelectedSlot(timeSlots[index]);
    };



    const handleConfirm = () => {
        // Get the selected slot
        const selectedSlot = timeSlots.find((slot) => slot.selected);
        if (!selectedSlot) {
            alert('Please select a time slot before proceeding.');
            return;
        }

        // Split the time slot (e.g., "10:00 AM - 10:05 AM") into start and end times
        const [fromTime, toTime] = selectedSlot.time.split(' - ');

        // Create the appointment data as query parameters
        const params = new URLSearchParams({
            first_name: formData.firstName.trim(),
            last_name: formData.lastName.trim(),
            email: formData.email.trim(),
            contact: formData.phone.trim(),
            doctor_id: formData.clinicLocation, // From step 1
            service_id: formData.medicalType,   // From step 1
            date: formData.date,                // From step 2
            from_time: fromTime,                // From step 3
            to_time: toTime,                    // From step 3
            payment_type: "STRIPE",             // Required by API
            contact_type: 1                     // Required by API
        });

        // Construct the full API URL with query parameters
        const apiUrl = `https://medics-admin.themarketingfactory.co.uk/api/booking?${params.toString()}`;

        // Send the GET request
        fetch(apiUrl, {
            method: 'GET', // No body allowed
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Appointment booked successfully!');
                    // Reset form
                    setFormData({
                        medicalType: '',
                        clinicLocation: '',
                        date: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        taxiCouncil: '',
                        birthYear: '',
                        noPromotion: false,
                        paymentType: 'depositOnly',
                    });
                    setStep(1);
                } else {
                    alert(`Booking failed: ${data.message || 'Unknown error occurred.'}`);
                }
            })
            .catch((error) => {
                console.error('Error booking appointment:', error);
                alert('An error occurred while booking your appointment. Please try again.');
            });
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="form-container">
                <div className="newform">
                    {/* Step 1: Medical Type & Clinic Location */}
                    {step === 1 && (
                        <div className="form-step active">
                            <h2 className="form-title">Please select Medical type:</h2>
                            <form>


                                {/* new addition Malik */}


                                <div class="mb-3">
                                    <label for="medicalType" class="form-label">
                                        Medical Service: <span class="text-danger">*</span>
                                    </label>
                                    <select class="form-select" id="medicalType" name="medicalType" required>
                                        <option value="" disabled selected>Choose a Medical Service Option</option>
                                        <option value="come-to-us">Come to Us</option>
                                        <option value="we-come-at-your-door">We Come at Your Doorstep</option>
                                    </select>
                                </div>



                                {/* new addition Malik */}

                                
                                <div className="mb-3">
                                    <label htmlFor="medicalType" className="form-label">
                                        Medical type: <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="medicalType"
                                        name="medicalType"
                                        value={formData.medicalType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Medical type</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.id}>
                                                {service.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clinicLocation" className="form-label">
                                        Clinic location:
                                    </label>
                                    <select
                                        className="form-select"
                                        id="clinicLocation"
                                        name="clinicLocation"
                                        value={formData.clinicLocation}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Doctor</option>
                                        {clinics.length > 0 ? (
                                            clinics.map((clinic) => (
                                                <option key={clinic.data.id} value={clinic.data.id}>
                                                    {clinic.data.user.full_name} - {clinic.data.location}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="" disabled>No clinic locations available</option>
                                        )}
                                    </select>
                                </div>
                                <button type="button" className="buttonone" onClick={handleContinue}>
                                    Continue
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step 1: Date Selection */}
                    {step === 2 && (
                        <div className="form-step">
                            <h2 className="form-title">Pick a date:</h2>
                            <form>
                                <div className="calendar">
                                    <input
                                        type="date"
                                        id="datePicker"
                                        className="form-control"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleDateChange}
                                        min={today}
                                        required
                                    />
                                </div>
                                <button type="button" className="buttonone mt-3" onClick={handleDateContinue}>
                                    Continue
                                </button>
                            </form>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="form-step">
                            <h2 className="form-title">Pick time:</h2>
                            <form>
                                <div id="timeSlots" className="d-grid gap-2 mt-3">
                                    {loading ? (
                                        <p>Loading time slots...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : timeSlots.length > 0 ? (
                                        timeSlots.map((slot, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                className={`time-slot ${slot.selected ? 'active' : ''}`}
                                                onClick={() => handleSlotSelect(index)}
                                            >
                                                {slot.time}
                                            </button>
                                        ))
                                    ) : (
                                        <p>No available time slots for the selected date.</p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="buttonone mt-3"
                                    onClick={handleContinue}
                                    disabled={!timeSlots.some(slot => slot.selected)}
                                >
                                    Continue
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step 3: User Details & Payment */}
                    {step === 4 && (
                        <div className="form-step">
                            <h2 className="form-title">Drive Thru Medics</h2>
                            {/* Form Fields */}
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* Additional Fields */}
                            <h5>Payment Type:</h5>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="depositOnly"
                                    name="paymentType"
                                    value="depositOnly"
                                    checked={formData.paymentType === "depositOnly"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="depositOnly" className="form-check-label">Deposit only</label>
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="wholeAmount"
                                    name="paymentType"
                                    value="wholeAmount"
                                    checked={formData.paymentType === "wholeAmount"}
                                    onChange={handleChange}
                                />
                                <label htmlFor="wholeAmount" className="form-check-label">Whole amount</label>
                            </div>
                            <button type="button" className="buttonone" onClick={handleConfirm}>
                                Confirm
                            </button>
                            <button type="button" className="buttonone btn-light" onClick={() => setStep(1)}>
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingForm;



// STRIPE_KEY="pk_test_51QZ1PZG8tVfQhNR9NbKgvPxdhOYrMfxtrlErQ6cIIKRY7bLAOiyZ4oU7tEFrK3OB7LidLtdk05RLqVz3O0YyYeHH005bEX8W9q"
// STRIPE_SECRET="sk_test_51QZ1PZG8tVfQhNR9UPRhiYXuoWvnwI2ce8UmxsCT286qi4Fk8G6MFKLM8BgA1cuyeweDcOIEy85EjINJyIqQdS2t00tgzo6XAg"
// https://medics-admin.themarketingfactory.co.uk/api/create-payment-session
