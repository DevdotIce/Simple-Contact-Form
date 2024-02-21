let submit = document.getElementById('submit');
submit.addEventListener('click', function() {
    if (email.value === '' || message.value === '') {
        alert('Please fill out the form before submitting.');
    } else {
        alert('Thank you for your submission!, Hope to get back to you soon!');
    }
});





let button = document.getElementById('hide-panel');
    let panel = document.querySelector('#see-more .panel');

    button.addEventListener('click', function() {
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });




    let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-type');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    }






    // let TxtType = function(el, toRotate, period) {
    //     // Constructor for the TxtType effect
    //     this.toRotate = toRotate; // Array of strings to cycle through
    //     this.el = el; // The DOM element where the effect is applied
    //     this.loopNum = 0; // Keeps track of the current loop iteration
    //     this.period = parseInt(period, 10) || 2000; // Time between each text change
    //     this.txt = ''; // Current text content
    //     this.tick(); // Initiates the typing effect
    //     this.isDeleting = false; // State to track deleting or adding characters
    // };

    // TxtType.prototype.tick = function() {
    //     // Main function to handle the typing effect
    //     let i = this.loopNum % this.toRotate.length; // Current string to type out
    //     let fullTxt = this.toRotate[i]; // Full text of the current string

    //     // Handle deleting or adding characters
    //     if (this.isDeleting) {
    //         this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //         this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }

    //     // Update the element's HTML
    //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    //     let that = this; // Reference to 'this' for use in setTimeout
    //     let delta = 200 - Math.random() * 100; // Randomize typing speed

    //     // Speed up deletion
    //     if (this.isDeleting) { delta /= 2; }

    //     // Handle the transition between deleting and adding text
    //     if (!this.isDeleting && this.txt === fullTxt) {
    //         delta = this.period; // Wait before starting to delete
    //         this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //         this.isDeleting = false; // Switch to adding text
    //         this.loopNum++; // Move to the next string
    //         delta = 500; // Wait before starting to add text
    //     }

    //     // Recursive call to continue the effect
    //     setTimeout(function() {
    //         that.tick();
    //     }, delta);
    // };

    // window.onload = function() {
    //     // Initialize the effect for all elements with the class 'typewrite'
    //     let elements = document.getElementsByClassName('typewrite');
    //     for (let i=0; i<elements.length; i++) {
    //         let toRotate = elements[i].getAttribute('data-type'); // Text options
    //         let period = elements[i].getAttribute('data-period'); // Typing period
    //         if (toRotate) {
    //             new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    //     // Inject CSS for cursor effect
    //     let css = document.createElement("style");
    //     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    //     document.body.appendChild(css);
    // };