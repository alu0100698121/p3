var assert = chai.assert;

suite('INI', function() {
	test('Comprobamos función lexer para header', function() {
		var suso = "[hearder]";
		var susa = lexer(suso);
		assert.equal( susa[0].type, 'header');
	});
	test('Comprobamos función lexer para comment', function() {
		var suso = ";suso ole";
		var susa = lexer(suso);
		assert.equal( susa[0].type, 'comments');
	});
	test('Comprobamos función lexer para error', function() {
		var suso = "eWACLIYUNBTF2U5CTGNSJE4YSFUBVTGNYWEQR7ACNFHEYJM";
		var susa = lexer(suso);
		assert.equal( susa[0].type, 'error');
	});
	
	test('Comprobamos función tokensToString', function() {
		var suso = ["hola"];
		var susa = tokensToString(suso);
		assert.equal( susa, '<ol>\n <li> <span class = ""> \n\t\t"hola" \n\t  </span>\n    </ol>');
	});
});