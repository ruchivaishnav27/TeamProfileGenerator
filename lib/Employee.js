class Employee {
    constructor (name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
};

getName(); {
    return {
        name: this.name
    }
};

getId(); {
    return {
        id: this.id
    }
};

getEmail(); {
    return {
        email: this.email
    }
};
    
getRole(); {
    switch (role) {
        case 'manager': this.manager = role;
            break;
        case 'engineer': this.engineer = role;
            break;
        case 'intern': this.intern = role;
            break;
    }
};

module.exports = Employee;
