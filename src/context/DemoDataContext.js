"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  initialBookings,
  initialDrivers,
  initialCustomers,
  initialVehicles,
  initialNotifications,
} from "@/data/demoData";

const DemoDataContext = createContext();

export function DemoDataProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load persisted state from localStorage or use initial mock data
    const savedBookings = localStorage.getItem("elite_demo_bookings");
    const savedDrivers = localStorage.getItem("elite_demo_drivers");
    const savedCustomers = localStorage.getItem("elite_demo_customers");
    const savedVehicles = localStorage.getItem("elite_demo_vehicles");
    const savedNotifications = localStorage.getItem("elite_demo_notifications");

    setBookings(savedBookings ? JSON.parse(savedBookings) : initialBookings);
    setDrivers(savedDrivers ? JSON.parse(savedDrivers) : initialDrivers);
    setCustomers(savedCustomers ? JSON.parse(savedCustomers) : initialCustomers);
    setVehicles(savedVehicles ? JSON.parse(savedVehicles) : initialVehicles);
    setNotifications(savedNotifications ? JSON.parse(savedNotifications) : initialNotifications);
    setIsLoaded(true);
  }, []);

  // Save changes to localStorage whenever state updates
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("elite_demo_bookings", JSON.stringify(bookings));
      localStorage.setItem("elite_demo_drivers", JSON.stringify(drivers));
      localStorage.setItem("elite_demo_customers", JSON.stringify(customers));
      localStorage.setItem("elite_demo_vehicles", JSON.stringify(vehicles));
      localStorage.setItem("elite_demo_notifications", JSON.stringify(notifications));
    }
  }, [bookings, drivers, customers, vehicles, notifications, isLoaded]);

  // 1. Add New Booking (Customer / Modal)
  const addBooking = (bookingData) => {
    const newRef = "EC-" + Math.floor(100000 + Math.random() * 900000);
    const newBooking = {
      id: newRef,
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      status: "Pending",
      paymentStatus: bookingData.paymentScreenshot ? "Verification Required" : "Pending",
      driverId: null,
      driverName: "Unassigned",
      ...bookingData,
    };

    setBookings((prev) => [newBooking, ...prev]);

    // Add push notification for Admin
    addNotification({
      id: "notif-" + Date.now(),
      title: `New Booking ${newRef} Created`,
      message: `${bookingData.customerName || "Customer"} booked ${bookingData.vehicleName || "a vehicle"} for ${bookingData.date}`,
      time: "Just now",
      read: false,
      role: "admin",
    });

    return newRef;
  };

  // 2. Update Booking Status (Admin / Driver / Customer)
  const updateBookingStatus = (bookingId, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );

    addNotification({
      id: "notif-" + Date.now(),
      title: `Booking ${bookingId} Updated`,
      message: `Status changed to ${newStatus}`,
      time: "Just now",
      read: false,
      role: "all",
    });
  };

  // 3. Assign Driver to Booking (Admin)
  const assignDriverToBooking = (bookingId, driverId) => {
    const driver = drivers.find((d) => d.id === driverId);
    const driverName = driver ? driver.name : "Unassigned";

    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId
          ? {
              ...b,
              driverId: driverId,
              driverName: driverName,
              status: b.status === "Pending" ? "Confirmed" : b.status,
            }
          : b
      )
    );

    if (driver) {
      addNotification({
        id: "notif-" + Date.now(),
        title: `Trip Assigned to ${driverName}`,
        message: `Booking ${bookingId} has been assigned to your schedule.`,
        time: "Just now",
        read: false,
        role: "driver",
      });
    }
  };

  // 4. Payment Approval / Rejection (Admin)
  const approvePayment = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === bookingId
          ? { ...b, paymentStatus: "Paid", status: b.status === "Pending" ? "Confirmed" : b.status }
          : b
      )
    );

    addNotification({
      id: "notif-" + Date.now(),
      title: `Payment Verified for ${bookingId}`,
      message: `Receipt screenshot approved by dispatch desk.`,
      time: "Just now",
      read: false,
      role: "customer",
    });
  };

  const rejectPayment = (bookingId) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, paymentStatus: "Verification Failed" } : b))
    );
  };

  // 5. Add Driver (Admin)
  const addDriver = (driverObj) => {
    const newId = "drv-" + (drivers.length + 1);
    const newDriver = {
      id: newId,
      rating: 5.0,
      tripsCount: 0,
      todaysEarnings: 0,
      availability: "Available",
      status: "Available",
      dbsVerified: true,
      licenceVerified: true,
      vehicleVerified: true,
      photo: "/images/lifestyle.jpg",
      ...driverObj,
    };
    setDrivers((prev) => [newDriver, ...prev]);
  };

  // 6. Update Driver Status (Admin / Driver)
  const updateDriverStatus = (driverId, newStatus) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === driverId ? { ...d, status: newStatus, availability: newStatus } : d))
    );
  };

  // 7. Update Vehicle Rates / Availability (Admin)
  const updateVehicle = (vehicleId, updates) => {
    setVehicles((prev) =>
      prev.map((v) => (v.id === vehicleId ? { ...v, ...updates } : v))
    );
  };

  // 8. Notifications helper
  const addNotification = (notif) => {
    setNotifications((prev) => [notif, ...prev]);
  };

  const markNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  // 9. Reset Demo Data to Initial Defaults
  const resetDemoData = () => {
    localStorage.removeItem("elite_demo_bookings");
    localStorage.removeItem("elite_demo_drivers");
    localStorage.removeItem("elite_demo_customers");
    localStorage.removeItem("elite_demo_vehicles");
    localStorage.removeItem("elite_demo_notifications");
    setBookings(initialBookings);
    setDrivers(initialDrivers);
    setCustomers(initialCustomers);
    setVehicles(initialVehicles);
    setNotifications(initialNotifications);
  };

  return (
    <DemoDataContext.Provider
      value={{
        bookings,
        drivers,
        customers,
        vehicles,
        notifications,
        addBooking,
        updateBookingStatus,
        assignDriverToBooking,
        approvePayment,
        rejectPayment,
        addDriver,
        updateDriverStatus,
        updateVehicle,
        markNotificationsRead,
        resetDemoData,
        isLoaded,
      }}
    >
      {children}
    </DemoDataContext.Provider>
  );
}

export const useDemoData = () => useContext(DemoDataContext);
