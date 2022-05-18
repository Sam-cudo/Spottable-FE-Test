import { useState, useEffect, useRef } from 'react';

/* Custom hook to close the modal whenever user clicks outside the modal */
export default function useModalVisible(initialIsVisible) {
    const [isModalVisible, setIsModalVisible] = useState(initialIsVisible);
    const ref = useRef(null); //ref to access Modal component 

    const handleClickOutside = (event) => {
        //condition to check whether the modal is visible and the click is not on the modal
        if (ref.current && !ref.current.contains(event.target)) {
            setIsModalVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, isModalVisible, setIsModalVisible };
}