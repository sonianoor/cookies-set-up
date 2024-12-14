function setCookie() {
    document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/";
    alert("Cookie has been set!");
}

function getCookie() {
    const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.split('=').map(c => c.trim());
        acc[key] = value;
        return acc;
    }, {});
    alert(`Username: ${cookies.username || 'Not Found'}`);
}

function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    alert("Cookie has been deleted!");
}
