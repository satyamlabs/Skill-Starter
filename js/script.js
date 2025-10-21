// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if(target){
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});


function openProblem(num) {
  const modal = document.getElementById("problemModal");
  const title = document.getElementById("problemTitle");
  const desc = document.getElementById("problemDesc");
  const code = document.getElementById("problemCode");

  const problems = {
    1: {
      title: "Problem 1: Print Hello World",
      desc: "Write a program to print 'Hello, World!' on the screen.",
      code: `#include <stdio.h>\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`
    },
    2: {
      title: "Problem 2: Even or Odd",
      desc: "Check whether a number entered by user is even or odd.",
      code: `#include <stdio.h>\nint main() {\n  int num;\n  printf("Enter a number: ");\n  scanf("%d", &num);\n  if(num % 2 == 0)\n    printf("Even");\n  else\n    printf("Odd");\n  return 0;\n}`
    },
    3: {
      title: "Problem 3: Sum of N Numbers",
      desc: "Find the sum of first N natural numbers.",
      code: `#include <stdio.h>\nint main() {\n  int n, sum = 0;\n  printf("Enter n: ");\n  scanf("%d", &n);\n  for(int i = 1; i <= n; i++) sum += i;\n  printf("Sum = %d", sum);\n  return 0;\n}`
    },
    4: {
      title: "Problem 4: Factorial Using Loop",
      desc: "Find the factorial of a number using loop.",
      code: `#include <stdio.h>\nint main() {\n  int n, fact = 1;\n  printf("Enter n: ");\n  scanf("%d", &n);\n  for(int i = 1; i <= n; i++) fact *= i;\n  printf("Factorial = %d", fact);\n  return 0;\n}`
    }
  };

  title.innerText = problems[num].title;
  desc.innerText = problems[num].desc;
  code.innerText = problems[num].code;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("problemModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("problemModal");
  if (event.target === modal) modal.style.display = "none";
}