import motion_sensor from "../images/motion_sensor.jpg";
import smart_hub from "../images/smart_hub.jpg";
import smoke_sensor from "../images/smoke_sensor.jpg";
import water_leak_sensor from "../images/water_leak_sensor.jpg";
import wireless_camera from "../images/wireless_camera.jpg";

export const ProductRules = [
    {
        productId: 2,
        price: 65.00,
        quantity: 3
    },
    {
        productId: 4,
        price: 35.00,
        quantity: 2
    }
];
    
export const AllProducts = [
    {
        id: 1,
        name: "Smart Hub",
        price: 49.99,
        src: smart_hub,
        title:"Smart Hub"
    },
    {
        id: 2,
        name: "Motion Sensor",
        price: 24.99,
        src: motion_sensor,
        title:"Motion Sensor"
    },
    {
        id: 3,
        name: "Wireless Camera",
        price: 99.99,
        src: wireless_camera,
        title:"Wireless Camera"
    },
    {
        id: 4,
        name: "Smoke Sensor",
        price: 19.99,
        src: smoke_sensor,
        title:"Smoke Sensor"
    },
    {
        id: 5,
        name: "Water Leak Sensor",
        price: 14.99,
        src: water_leak_sensor,
        title:"Water Leak Sensor"
    }
];
