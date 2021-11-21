## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Some parts about the project I did not fix:
- closing the recepients list when clicking outside of the Add recepients input field & outside of the recepients container
  -- therefore one has to click twice on the input field to toggle showSentRecepientList value (true/false)
- form does not reset after clicking Share
- form still allows adding recepients after clicking Share

Added:
- clicking on one of the seelcted recepient's names will remove that recepient
- one recepient cannot be added more than 1 time
- textarea input field is mandatory and has basic validation