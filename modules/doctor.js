class Doctor {
    constructor(name, fullname, location, rating, speciality, comment) {
        this.name = name;
        this.fullname = fullname;
        this.location = location;
        this.rating = rating;
        this.speciality = speciality;
        this.comment = comment;
    }

    get getName() {
        return this.name;
    }

    get getFullname(){
        return this.fullname;
    }

    get getLocation(){
        return this.location;
    }

    get getRating(){
        return this.rating;
    }

    get getSpeciality(){
        return this.speciality;
    }

    get getComment(){
        return this.comment;
    }

    get getEmail(){
        return this.name + '@mockdoctor.com';
    }
}   

module.exports = Doctor;