export default function(img) {

	const canvas = document.createElement('canvas'),
		ctx = canvas.getContext('2d'),
		tCanvas = document.createElement('canvas'),
		tctx = tCanvas.getContext('2d'),
		initSize = img.src.length;

	let width = img.width, ratio, count, base64Data,
		height = img.height;

	if ((ratio = width * height / 4000000) > 1) {
		ratio = width > height ? width / 900 : height / 900;
		width = Math.floor(width / ratio);
		height = Math.floor(height / ratio);
	} else {
		ratio = 1;
	}

	canvas.width = width;
	canvas.height = height;
	ctx.fillStyle = '#fff';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	if ((count = width * height / 1000000) > 1) {
		count = ~~(Math.sqrt(count) + 1);
		let nw = ~~(width / count);
		let nh = ~~(height / count);
		tCanvas.width = nw;
		tCanvas.height = nh;
		for (let i = 0; i < count; i++) {
			for (let j = 0; j < count; j++) {
				tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
				ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
			}
		}
	} else {
		ctx.drawImage(img, 0, 0, width, height);
	}

	const pngBase64Data = canvas.toDataURL('image/png', 0.1), jpegBase64Data = canvas.toDataURL('image/jpeg', 0.1);

	base64Data = jpegBase64Data ;

	console.log(pngBase64Data.length)
	console.log(jpegBase64Data.length)
	console.log('压缩前：' + initSize)
	console.log('压缩后：' + base64Data.length)
	console.log('压缩率：' + ~~(100 * (initSize - base64Data.length) / initSize) + "%")

	tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

	return base64Data;
}
