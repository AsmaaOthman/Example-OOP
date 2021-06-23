
let data = document.getElementById('btn-hello');
data.onclick = function (){
        
    function Person(first, last, age, gender, interests) {
        this.name = {
        first : first,
        last : last
        }
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        }
        this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + ' '+ this.name.last +'.');
        }
    }

    let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    person1.interests[1]
    person1.bio()

    let person2 = new Person('Ahmed', 'Ali', 30, 'male', ['music', 'skiing']);
    person2.interests[1]
    person2.bio()

    let person3 = new Person('Asmaa', 'Hamed', 25, 'female', ['music', 'skiing']);
    person3.interests[1]
    person3.bio()

    person3.greeting()

    
}
