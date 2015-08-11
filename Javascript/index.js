/* Agenets Object Prototype */

Rotation.prototype = {
    notAvailableEmployees: [],
    currentEmployee: "",
    setEmployeeToWeek: function () {
        var list = "";
        for (var i = 0; i < this.dates.length; i++) {
            if (this.availableEmployees.length === 0) {
                this.availableEmployees = this.notAvailableEmployees;
                this.notAvailableEmployees = [];
                this.setCurrentEmployee(this.availableEmployees.shift());
                list += this.currentEmployee + " is assigned to " + this.dates[i] + "\n";
            } else {
                this.setCurrentEmployee(this.availableEmployees.shift());
                list += this.currentEmployee + " is assigned to " + this.dates[i] + "\n";
            }
            this.notAvailableEmployees.push(this.currentEmployee);
        }
        return list;
    },

    setCurrentEmployee: function (name) {
        this.currentEmployee = name;
    },

    addEmployees: function (name) {
        for (var i = 0; i < name.length; i++) {
            this.availableEmployees.push(name[i]);
        }
    },

    removeEmployees: function (name) {
        for (var i = 0; i < name.length; i++) {
            var index = this.availableEmployees.indexOf(name[i]);
            if (index > -1) {
                this.availableEmployees.splice(index, 1);
            }
        }
    }
};

/* Employees Object */
function Rotation(availableEmployees, dates) {
    this.availableEmployees = availableEmployees;
    this.dates = dates;
}

/* Custom Date Functions */
function getMondays() {
    var d = new Date();
    var month = d.getMonth();
    var mondays = [];

    d.setDate(1);

    // Get the first Monday in the month
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Mondays in the month
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return mondays;
}

function getFridays() {
    var d = new Date();
    var month = d.getMonth();
    var fridays = [];

    d.setDate(1);

    // Get the first Friday in the month
    while (d.getDay() !== 5) {
        d.setDate(d.getDate() + 1);
    }

    // Get all the other Fridays in the month
    while (d.getMonth() === month) {
        fridays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }

    return fridays;
}

function getDateRange(mondays, fridays) {
    var dateRange = [];
    for (var i = 0; i < mondays.length; i++) {
        if (fridays[i] !== undefined) {
            dateRange.push([mondays[i].getMonth() + "/" + mondays[i].getDate() + " - " + fridays[i].getMonth() + "/" + fridays[i].getDate()]);
        } else {
            var lastMonday = new Date(mondays[i]);
            var lastFriday = new Date(mondays[i].setDate(mondays[i].getDate() + 4));
            dateRange.push([lastMonday.getMonth() + "/" + lastMonday.getDate() + " - " + lastFriday.getMonth() + "/" + lastFriday.getDate()]);
        }
    }
    return dateRange;
}

var dbEmployees = ["Dustin", "Clyde", "Joe"];
var dbDates = getDateRange(getMondays(), getFridays());
var rotation = new Rotation(dbEmployees, dbDates);

alert(rotation.setEmployeeToWeek());

rotation.addEmployees(["BJ", "Daniel T.", "Eric", "Terell"]);

alert(rotation.setEmployeeToWeek());