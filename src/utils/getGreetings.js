export function getGreeting() {
  // Get the current date and time
  const now = new Date();
  // Get the current hour (0-23)
  const currentHour = now.getHours();
  console.log("🚀 ~ getGreeting ~ currentHour:", currentHour);
  let greeting;

  // Determine the appropriate greeting based on the current hour
  if (currentHour >= 6 && currentHour < 12) {
    greeting = "Good morning!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon!";
  } else if (currentHour >= 18 && currentHour < 24) {
    greeting = "Good evening!";
  } else {
    greeting = "Greetings!";
  }

  // Return the greeting
  return greeting;
}
