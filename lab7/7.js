function squares() {
	for (i = 0; i < document.querySelector('.in').value; ++i)  {
		let square = document.createElement('div');
		square.className = 'square';
        square.style.border = '1px solid black';

        square.style.top = Math.random() * 600 + 100 + 'px';
        square.style.left = Math.random() * 1500 + 100 + 'px';
        square.style.width = Math.random() * 100 + 50 + 'px';
		square.style.height = square.style.width;

        square.onclick = function()  {
			square.style.backgroundColor = 'yellow';
		};
        square.ondblclick = function() {
            square.remove();
        };
        document.body.appendChild(square);
	}
}

function triangles() {
    for (i = 0; i < document.querySelector('.in').value; ++i)  {
        let square = document.createElement('div');
        let squaresize = Math.random() * 100 + 50;
        square.style.position = 'absolute';
        square.style.width = squaresize +'px';
        square.style.height = square.style.width;
        square.style.top = Math.random() * 600 + 100 + 'px';
        square.style.left = Math.random() * 1500 + 100 + 'px';
        square.style.borderBottom = '1px solid black';
        square.style.overflow = 'hidden';

        let triangle = document.createElement('div');
        let trianglesize = squaresize/Math.sqrt(2);
        triangle.className = 'triangle';
        triangle.style.width = trianglesize +'px';
        triangle.style.height = triangle.style.width;
        triangle.style.transform = 'rotate(45deg)';
        triangle.style.top = squaresize - trianglesize / 2 + 'px';
        triangle.style.left = (squaresize - trianglesize) / 2 - 1/2 + 'px';
        triangle.style.border = '1px black solid';
        
        document.body.append(square);
        square.append(triangle);
        triangle.onclick = function() {
            triangle.style.background = 'yellow';
        };
        triangle.ondblclick = function(){
            square.remove()
        };
	}
}

function circles() {
    for (i = 0; i < document.querySelector('.in').value; ++i)  {
		let circle = document.createElement('div');
		circle.className = 'circle';
        circle.style.border = '1px solid black';

        circle.style.top = Math.random() * 600 + 100 + 'px';
        circle.style.left = Math.random() * 1500 + 100 + 'px';
        circle.style.width = Math.random() * 100 + 50 + 'px';
		circle.style.height = circle.style.width;

        circle.onclick = function()  {
			circle.style.backgroundColor = 'yellow';
		};
        circle.ondblclick = function() {
            circle.remove();
        };
        document.body.appendChild(circle);
	}
}
