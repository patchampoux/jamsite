const http = require('http');

// Create Node server
const server = http.createServer((req, res) => {
	// Only accept POST
	if (req.method === 'POST') {
		// Read POST body
		let body = '';

		req.on('data', data => {body += data});

		req.on('end', () => {
			console.log(body);

			// Respond
			res.writeHead(200, {'Content-Type' : 'text/plain'});
			res.end('success');
		});
	}
});

// Listen for contact form submission
server.listen(2222);
