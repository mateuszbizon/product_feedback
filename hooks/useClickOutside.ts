import { useEffect, useRef } from 'react';

function useClickOutside<T extends HTMLElement>(clickOutside: () => void, dropdownOpen: boolean) {
    const ref = useRef<T>(null);

    function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          clickOutside();
        }
    }

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownOpen]);

    return ref;
}

export default useClickOutside;