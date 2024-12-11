const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function login(email, password) {
    const payload = {
        email: email,
        password: password,
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);

    if (response.status === 201) {
        let data = await response.json();
        return data.token;
    } else {
        throw new Error(
            `Received status ${response.status} when logging in. Expected 201`
        );
    }
}

export async function signup(userInfo) {
    const payload = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
    };

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    };

    let response = await fetch(`${BACKEND_URL}/users`, requestOptions);

    if (response.status === 201) {
        return;
    } else {
        throw new Error(
            `Received status ${response.status} when signing up. Expected 201`
        );
    }
}