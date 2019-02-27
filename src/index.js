// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var result = {};
	if (currency > 10000) {
		result['error'] = "You are rich, my friend! We don't have so much coins for exchange";

	} else if (currency > 0) {
		var H = 50,
			h = 0,
			Q = 25,
			q = 0,
			D = 10,
			d = 0,
			N = 5,
			n = 0,
			P = 1,
			p = 0;
		var am = currency*100,
			rest;
		h = Math.floor(currency / H);
		rest = currency - h*H;
		q = Math.floor(rest / Q);
		rest = rest - q * Q;
		d = Math.floor(rest / D);
		rest = rest - d * D;
		n = Math.floor(rest / N);
		rest = rest - n * N;
		p = rest;


		if (h!= 0) {
			result['H'] = h;
		}
		if (q != 0) {
			result['Q'] = q;
		}
		if (d != 0) {
			result['D'] = d;
		}
		if (n != 0) {
			result ['N'] = n;
		}
		if (p != 0) {
			result ['P'] = p;
		}
	}

	return result;
}
