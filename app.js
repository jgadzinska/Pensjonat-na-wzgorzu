
        //FIRST SLIDER

        const slider1 = document.querySelectorAll(".slideFirst");
        const btnPrev1 = document.getElementById("prevButtonFirst");
        const btnNext1 = document.getElementById("nextButtonFirst");
        
        let currentSlide1 = 0;
        
        function hideSliderOne () {
            slider1.forEach(item => item.classList.remove("one"));
        };
        
        function showSliderOne () {
            slider1[currentSlide1].classList.add("one");
        };
        
        function nextSliderOne () {
            hideSliderOne();
            if(currentSlide1 == slider1.length -1) {
                currentSlide1 = 0;
            } else {
                currentSlide1++;
            }
            showSliderOne();
        };
        
        function previousSliderOne () {
            hideSliderOne();
            if(currentSlide1 == 0) {
                currentSlide1 = slider1.length -1
            } else {
                currentSlide1--;
            }
            showSliderOne();
        };
        
        currentSlide1 = currentSlide1 +1;
        currentSlide1 = currentSlide1 -1;
        
        btnNext1.addEventListener("click", nextSliderOne);
        btnPrev1.addEventListener("click", previousSliderOne);
        
        
        
                //SECOND SLIDER
        
        const slider2 = document.querySelectorAll(".slideSecond");
        const btnPrev2 = document.getElementById("prevButtonSecond");
        const btnNext2 = document.getElementById("nextButtonSecond");
        
        let currentSlide2 = 0;
        
        function hideSliderTwo () {
            slider2.forEach(item => item.classList.remove("two"));
        };
        
        function showSliderTwo () {
            slider2[currentSlide2].classList.add("two");
        };
        
        function nextSliderTwo () {
            hideSliderTwo();
            if(currentSlide2 == slider2.length -1) {
                currentSlide2 = 0;
            } else {
                currentSlide2++;
            }
            showSliderTwo();
        };
        
        function previousSliderTwo () {
            hideSliderTwo();
            if(currentSlide2 == 0) {
                currentSlide2 = slider2.length -1
            } else {
                currentSlide2--;
            }
            showSliderTwo();
        }
        
        currentSlide2 = currentSlide2 +1;
        currentSlide2 = currentSlide2 -1;
        
        btnNext2.addEventListener("click", nextSliderTwo);
        btnPrev2.addEventListener("click", previousSliderTwo);
        
        
        
                //THIRD SLIDER
        
        const slider3 = document.querySelectorAll(".slideThird");
        const btnPrev3 = document.getElementById("prevButtonThird");
        const btnNext3 = document.getElementById("nextButtonThird");
        
        let currentSlide3 = 0;
        
        function hideSliderThree () {
            slider3.forEach(item => item.classList.remove("three"));
        };
        
        function showSliderThree () {
            slider3[currentSlide3].classList.add("three");
        };
        
        function nextSliderThree () {
            hideSliderThree();
            if(currentSlide3 == slider3.length -1) {
                currentSlide3 = 0;
            } else {
                currentSlide3++;
            }
            showSliderThree();
        };
        
        function previousSliderThree () {
            hideSliderThree();
            if(currentSlide3 == 0) {
                currentSlide3 = slider3.length -1;
            } else {
                currentSlide3--;
            }
            showSliderThree();
        };
        
        currentSlide3 = currentSlide3 +1
        currentSlide3 = currentSlide3 -1
        
        btnNext3.addEventListener("click", nextSliderThree);
        btnPrev3.addEventListener("click", previousSliderThree);
        
        
        
                //FOURTH SLIDER
        
        const slider4 = document.querySelectorAll(".slideFourth");
        const btnPrev4 = document.getElementById("prevButtonFourth");
        const btnNext4 = document.getElementById("nextButtonFourth");
        
        let currentSlide4 = 0;
        
        function hideSliderFour () {
            slider4.forEach(item => item.classList.remove("four"));
        };
        
        function showSliderFour () {
            slider4[currentSlide4].classList.add("four");
        };
        
        function nextSliderFour () {
            hideSliderFour();
            if(currentSlide4 == slider4.length -1) {
                currentSlide4 = 0;
            } else {
                currentSlide4++;
            }
            showSliderFour();
        };
        
        function previousSliderFour () {
            hideSliderFour();
            if(currentSlide3 == 0) {
                currentSlide4 = slider4.length -1
            } else {
                currentSlide4--;
            }
            showSliderFour();
        };
        
        currentSlide4 = currentSlide4 +1;
        currentSlide4 = currentSlide4 -1;
        
        btnNext4.addEventListener("click", nextSliderFour);
        btnPrev4.addEventListener("click", previousSliderFour);