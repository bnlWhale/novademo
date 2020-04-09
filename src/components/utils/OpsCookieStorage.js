const setCookie = (name, value, expire) => {
    let date = new Date();
    date.setSeconds(date.getSeconds() + expire);
    document.cookie = name + " = " + escape(value) + "; expires=" + date.toLocaleTimeString();
};

const getCookie = (name) => {
    let arr;
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};

const readCookie = (name) => {
    let arr = null
    let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (document.cookie && (arr = document.cookie.match(reg))) {
        return unescape(arr[2])
    } else {
        return null;
    }
}

const delCookie = (name) => {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + " = " + cval + "; expires=" + exp.toLocaleTimeString();
    }
};



const setItem = function(key, value) {
    if (value == null || value == undefined || value == 'undefined') {
        localStorage.setItem(key, value)
    }else{
        localStorage.setItem(key, JSON.stringify(value))
    }
}

const getItem = function(key) {
    let value = localStorage.getItem(key)
    if (value == null || value == undefined || value == 'undefined') {
        return ''
    }
    return JSON.parse(value)
}

const removeItem = function(key) {
    if (!key) {
        return
    }
    localStorage.removeItem(key)
}

const clearAll = function() {
    localStorage.clear()
}

export default {
    setCookie,
    getCookie,
    readCookie,
    delCookie,
    setItem,
    getItem,
    removeItem,
    clearAll
}
