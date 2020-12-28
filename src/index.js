// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js')
//             .then((registration) => {
//                 console.log('Service worker registered.', registration);
//             })
//             .catch(error => {
//                 console.log('Service worker error on register', error)
//             })
//     });
// }

// const btnShare = document.querySelector('#btnShare');

// btnShare.addEventListener('click', () => {
//     try {
//         if (!navigator.share) {
//             console.log('Navigator don\'t have the share functionality');
//             return
//         }
//             navigator.share({
//                 title: 'The PWA',
//                 text: 'This is my first PWA page',
//                 // url: 'https://the-pwa.netlify.app'
//             })
//                 .then(() => console.log('Successful share'))
//                 .catch((error) => console.log('Error sharing', error));
//     } catch (err) {
//         console.error("Share failed:", err.message);
//     }
// })

// // let installPrompt;

// // const button = document.querySelector('installButton');
// // // hide the button initially
// // button.style.display = 'none';

// // window.addEventListener('beforeinstallprompt', e => {
// //     e.preventDefault();
// //     // show the button if it makes sense
// //     button.style.display = 'block';
// //     installPrompt = e;
// // })

// // button.addEventListener('click', () => {
// //     if (!installPrompt) {
// //         // The deferred prompt isn't available.
// //         return;
// //     }

// //     // Show the install prompt.
// //     installPrompt.prompt();

// //     // Log the result
// //     installPrompt.userChoice.then((result) => {
// //         console.log('userChoice', result);
// //         // Reset the deferred prompt variable, since prompt() can only be called once.
// //         installPrompt = null
// //         // Hide the install button.
// //         button.style.display = 'none';
// //     })
// // })

