'use strict';

// Using local container (discord-api)
const api = 'http://discord-api:5007/avatar/';
const id = '1157330143245766726';

async function fetchAvatar() {
    try {
        const response = await fetch(api + id, {
            method: 'GET',
            mode: 'cors'
        });
        if (response.ok) {
            const userData = await response.json();
            var avatar = userData.avatar_url;
            document.getElementById('avatar').src = avatar;
        } else {
            console.warn('Something went wrong. xd');
        }
    } catch (error) {
        console.warn('Something went wrong. xd');
    }
}

fetchAvatar();