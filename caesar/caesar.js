const caesar = function(msg, key) {
    if (key < 0) {
        return caesar(msg, key + 26);
    }

    let encMsg = '';

    for (let i = 0; i < msg.length; i++) {
        let c = msg[i];
        if (c.match(/[a-z]/i)) {
            let code = msg.charCodeAt(i);
            if ((code >= 65) && (code <= 90)) {
                c = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if ((code >= 97) && (code <= 122)) {
                c = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        encMsg += c;
    }
    return encMsg;
};

module.exports = caesar
