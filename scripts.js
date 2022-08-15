const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

const bloodTypes = [];

class BloodType {
    constructor(name, donors = [], recievers = []) {
        this.name = name;
        this.donors = donors;
        this.recievers = recievers;
        bloodTypes.push(this);
    }
    printDonors() {
        this.donors.forEach(donor => {
            document.getElementById(donor + '_donors-id').style.backgroundColor = 'red';
        });
    }
    printRecievers() {
        this.recievers.forEach(reciever => {
            document.getElementById(reciever + '_reciever-id').style.backgroundColor = 'red';
        });
    }
}

const A_positive = new BloodType('A+', ['A+', 'A-', 'O+', 'O-'], ['A+', 'AB+']);
const A_negative = new BloodType('A-', ['A-', 'O-'], ['A+', 'A-', 'AB+', 'AB-']);
const B_positive = new BloodType('B+', ['B+', 'B-', 'O+', 'O-'], ['B+', 'AB+']);
const B_negative = new BloodType('B-', ['B-', 'O-'], ['B+', 'B-', 'AB+', 'AB-']);
const AB_positive = new BloodType('AB+', ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], ['AB+']);
const AB_negative = new BloodType('AB-', ['A-', 'B-', 'AB-', 'O-'], ['AB+', 'AB-']);
const O_positive = new BloodType('O+', ['O+', 'O-'], ['A+', 'B+', 'AB+', 'O+']);
const O_negative = new BloodType('O-', ['O-'], ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);

bloodTypes.forEach(type => {
    document.getElementById(type.name + '_selector-label').addEventListener('click', () => {
        bloodTypes.forEach((bloodType) => {
            document.getElementById(bloodType.name + '_reciever-id').style.backgroundColor = '#cc666671';
            document.getElementById(bloodType.name + '_donors-id').style.backgroundColor = '#cc666671';
        });
        const element = bloodTypes.find(bloodType => {
            return bloodType.name === type.name;
        })
        element.printDonors();
        element.printRecievers();
    })
});

toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});