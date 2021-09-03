
// OPTION 1 START -----
// WITH CUSTOM FILE
// var HoopylightBox = function () {
// 	this.init = () => {
// 		var iframe = document.createElement('iframe');
// 		var body = document.getElementById('iframeBody');

// 		iframe.style.width = '400px';
// 		iframe.style.height = '600px';

// 		iframe.src = 'index.html';
// 		iframe.onreadystatechange = function () {
// 			if (iframe.readyState !== 'complete') {
// 				return;
// 			}
// 		};
// 		body.appendChild(iframe);
// 	}
// }

// WITHOUT CUSTOM FILE (FROM WEBSITE SPECIAL ROUTE)
var HoopylightBox = function () {
    this.init = () => {
        var iframe = document.createElement('iframe');
        var body = document.getElementById('iframeBody');

        iframe.style.width = '400px';
        iframe.style.height = '600px';

        iframe.src = 'https://hoopy.in/help/privacy-policy';
        iframe.onreadystatechange = function () {
            if (iframe.readyState !== 'complete') {
                return;
            }
        };
        body.appendChild(iframe);
    }
}
// OPTION 1 END -------



// OPTION 2 START -----
// $(document).ready(function () {

//     $(document).off('click', '#modalbtn').on('click', '#modalbtn', function () {
//         $('#alertModal').show();
//     })

//     $(document).off('click', '.nextBtn ').on('click', '.nextBtn ', function () {
//         $('#alertModal').hide();
//     })
// })


// OPTION 2 END-------