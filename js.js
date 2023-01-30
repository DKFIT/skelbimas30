// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref, update, onValue, push, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { firebaseConfig } from "./firebase.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
let signup = document.getElementById("signup");
// new user register 


const modal = () => {
	const modalContainer = document.getElementById("modalcontainer");
	const mbutton = document.createElement("button");
	mbutton.setAttribute("type", "button");
	mbutton.setAttribute("id", "hidebutton");
	mbutton.setAttribute("class", "btn btn-primary");
	mbutton.setAttribute("data-bs-toggle", "modal");
	mbutton.setAttribute("data-bs-target", "#exampleModal");
	mbutton.innerText = "Open Modal"
	document.body.appendChild(mbutton); // Append the button to the HTML body

	const mdiv1 = document.createElement("div");
	mdiv1.className = "modal fade";
	mdiv1.setAttribute("id", "exampleModal");
	mdiv1.setAttribute("tabindex", "-1");
	mdiv1.setAttribute("aria-labelledby", "exampleModalLabel");
	mdiv1.setAttribute("aria-hidden", "true");
	modalContainer.appendChild(mdiv1);

	const mdiv2 = document.createElement("div");
	mdiv2.className = "modal-dialog";
	mdiv1.appendChild(mdiv2); // Append mdiv2 to mdiv1

	const mdiv3 = document.createElement("div");
	mdiv3.className = "modal-content";
	mdiv2.appendChild(mdiv3); // Append mdiv3 to mdiv2

	const mdiv4 = document.createElement("div");
	mdiv4.className = "modal-header";
	mdiv3.appendChild(mdiv4); // Append mdiv4 to mdiv3

	const mheader = document.createElement("h1");
	mheader.innerText = "Incorrect Details!";
	mheader.setAttribute("class", "modal-title fs-5");
	mheader.setAttribute("id", "exampleModalLabel");
	mdiv4.appendChild(mheader);

	const mb1 = document.createElement("button");
	mb1.setAttribute("type", "button");
	mb1.setAttribute("class", "btn-close");
	mb1.setAttribute("data-bs-dismiss", "modal");
	mb1.setAttribute("aria-label", "Close");
	mdiv4.appendChild(mb1);

	const mdiv5 = document.createElement("div");
	mdiv5.className = "modal-body";
	mdiv3.appendChild(mdiv5); // Append mdiv5 to mdiv3

	const mbody = document.createElement("h4");
	mbody.innerText = "Information provided does not match the database. Please make sure that information provided is correct or register new account.";
	mdiv5.appendChild(mbody);

	const mdiv6 = document.createElement("div");
	mdiv6.className = "modal-footer";
	mdiv3.appendChild(mdiv6); // Append mdiv6 to mdiv3

	const mb2 = document.createElement("button");
	document.getElementById("hidebutton").style.display = "none"
	const button = document.querySelector("#hidebutton");
	button.click();
	document.getElementById("hidebutton").remove();
}
const pradineforma = () => {
	let pforma = document.getElementById("loginforma")
	//
	let rowdiv = document.createElement("div")
	rowdiv.className = "row mt-5";
	rowdiv.setAttribute('id', 'row');
	pforma.appendChild(rowdiv)
	//
	let registerdiv = document.createElement("div")
	registerdiv.className = "col-6"
	rowdiv.appendChild(registerdiv)
	//
	let rheader = document.createElement("header")
	rheader.innerText = "Register"
	registerdiv.appendChild(rheader);
	//
	let ruserlogin = document.createElement("input")
	ruserlogin.className = "form-control m-1"
	ruserlogin.setAttribute('placeholder', 'Enter Username');
	ruserlogin.setAttribute('id', 'username');
	ruserlogin.setAttribute('type', 'username');
	registerdiv.appendChild(ruserlogin);
	//
	let ruseremail = document.createElement("input")
	ruseremail.className = "form-control m-1"
	ruseremail.setAttribute('placeholder', 'Enter Email address');
	ruseremail.setAttribute('id', 'email');
	ruseremail.setAttribute('type', 'email');
	registerdiv.appendChild(ruseremail);
	//
	let ruserpass = document.createElement("input")
	ruserpass.className = "form-control m-1"
	ruserpass.setAttribute('placeholder', 'Enter Password');
	ruserpass.setAttribute('id', 'pass');
	ruserpass.setAttribute('type', 'password');
	registerdiv.appendChild(ruserpass);
	//
	let rusersignup = document.createElement("button")
	rusersignup.innerText = "Sign up"
	rusersignup.setAttribute('type', 'button');
	rusersignup.className = "btn btn-dark mt-3"
	rusersignup.setAttribute('id', 'signup');
	registerdiv.appendChild(rusersignup)
	//
	let logindiv = document.createElement("div")
	logindiv.className = "col-6"
	rowdiv.appendChild(logindiv)
	//
	let lheader = document.createElement("header")
	lheader.innerText = "Login"
	logindiv.appendChild(lheader);
	//
	let luserlogin = document.createElement("input")
	luserlogin.className = "form-control m-1"
	luserlogin.setAttribute('placeholder', 'Enter Username');
	luserlogin.setAttribute('id', 'lusername');
	luserlogin.setAttribute('type', 'username');
	logindiv.appendChild(luserlogin);
	//
	let luseremail = document.createElement("input")
	luseremail.className = "form-control m-1"
	luseremail.setAttribute('placeholder', 'Enter Email address');
	luseremail.setAttribute('id', 'lemail');
	luseremail.setAttribute('type', 'email');
	logindiv.appendChild(luseremail);
	//
	let luserpass = document.createElement("input")
	luserpass.className = "form-control m-1"
	luserpass.setAttribute('placeholder', 'Enter Password');
	luserpass.setAttribute('id', 'lpass');
	luserpass.setAttribute('type', 'password');
	logindiv.appendChild(luserpass);
	//
	let lusersignup = document.createElement("button")
	lusersignup.innerText = "login"
	lusersignup.setAttribute('type', 'button');
	lusersignup.className = "btn btn-dark mt-3"
	lusersignup.setAttribute('id', 'loginn');
	logindiv.appendChild(lusersignup)
}

let removepradineforma = () => {
	document.getElementById("row").remove();
}

const skelbimoforma = () => {
	const maindiv = document.getElementById('skelbimoforma');
	const container = document.createElement('div');
	container.className = 'container'
	container.setAttribute('id', 'skelbimocontainer');
	maindiv.appendChild(container);
	const row = document.createElement('div')
	row.className = 'row';
	container.appendChild(row);
	container.setAttribute('id', 'roww');
	//
	const signOutt = document.createElement("button");
	signOutt.setAttribute('id', 'signOut');
	signOutt.innerText = 'logout'
	signOutt.className = 'material-symbols-outlined';
	row.appendChild(signOutt);
	//
	const titlep = document.createElement('p')
	titlep.innerText = 'Title';
	titlep.className = 'mt-5';
	const categoryp = document.createElement('p')
	categoryp.innerText = 'Category';
	const descp = document.createElement('p')
	descp.innerText = 'Description';
	const pricep = document.createElement('p')
	pricep.innerText = 'Price';
	const imgp = document.createElement('p')
	imgp.innerText = 'Image';
	//
	const inputTitle = document.createElement('input');
	inputTitle.className = 'form-control m-1'
	inputTitle.setAttribute('id', 'it');
	const inputCategory = document.createElement('input');
	inputCategory.className = 'form-control m-1';
	inputCategory.setAttribute('id', 'ic');
	const inputDesc = document.createElement('input');
	inputDesc.className = 'form-control m-1';
	inputDesc.setAttribute('id', 'id');
	const inputPrice = document.createElement('input');
	inputPrice.className = 'form-control m-1';
	inputPrice.setAttribute('id', 'ip');
	const inputImg = document.createElement('input');
	inputImg.className = 'form-control m-1';
	inputImg.setAttribute('id', 'ii');
	const submit = document.createElement("button");
	//
	submit.setAttribute('id', 'submit');
	submit.className = 'mt-5';
	submit.innerText = 'Submit';
	row.appendChild(titlep);
	row.appendChild(inputTitle);
	row.appendChild(categoryp);
	row.appendChild(inputCategory);
	row.appendChild(descp);
	row.appendChild(inputDesc);
	row.appendChild(pricep);
	row.appendChild(inputPrice);
	row.appendChild(imgp);
	row.appendChild(inputImg);
	row.appendChild(submit);
}
let removeskelbimoforma = () => {
	document.getElementById("roww").remove();
}

const registerNewUser = () => {
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass").value;

	createUserWithEmailAndPassword(auth, email, pass)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log("new user created!");
			removepradineforma();




			set(ref(database, "users/" + user.uid), {
				email: email,
				role: "simple_user",

			});
			console.log("labass")
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorMessage)
		});
}
const loginuser = () => {
	let lemail = document.getElementById("lemail").value;
	let lpass = document.getElementById("lpass").value;

	signInWithEmailAndPassword(auth, lemail, lpass)
		.then((userCredential) => {

			const user = userCredential.user;
			const logintTime = new Date();

			update(ref(database, 'users/' + user.uid), {
				last_login: logintTime
			});
			console.log(user)

			console.log("logged in")
			removepradineforma()


			// document.getElementById("signup").addEventListener("click", changeBackground);
			// document.getElementById("loginn").addEventListener("click", changeBackground);
		})
		.catch((error) => {

			const errorCode = error.code;
			const errorMessage = "Such account does not exist, please check your login details or register new account. Thank you!"
			modal()
			console.log(errorCode)

			let resetauthelse = document.getElementById("row");
			resetauthelse = null;
			console.log(resetauthelse)





		})
};
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log("logged in");
		const uid = user.uid;
		role_validation(user)

		skelbimoforma();
		document.getElementById("signOut").onclick = logout;
		document.getElementById("signOut").addEventListener("click", removeskelbimoforma)
		document.getElementById("signOut").addEventListener("click", clearhtml)
		document.getElementById("signOut").addEventListener("click", removetable)
		document.getElementById("submit").onclick = () => insertData(uid);
		getInfo(uid);

	} else {

		console.log("logged off");
		pradineforma();
		document.getElementById("signup").onclick = registerNewUser;
		document.getElementById("loginn").onclick = loginuser;
	}
});
const logout = () => {
	signOut(auth).then(() => {

		console.log("atsijunge")
	}).catch((error) => {
		console.log("neatsijunge")

	})
};
//kurti skelbima
const getInfo = (uid, productUID) => {
	const db = getDatabase();
	console.log("getinfo")

	let tableCont = document.getElementById("tableCont");

	onValue(ref(db, 'users/' + uid + "/products/"), (snapshot) => {
		let products = snapshot.val();
		console.log(` get info pradzia` + { products })
		console.log(products)
		if (!products) {
			console.log('snapshot info failed')
			if (tableCont && tableCont.parentNode) {
				tableCont.parentNode.removeChild(tableCont);
			}
			return false;
		}
		console.log(tableCont)
		// Check if the tableCont element already exists in the DOM
		if (!tableCont) {
			tableCont = document.createElement("div");
			tableCont.id = "tableCont";
			tableCont.classList.add("container", "mt-5");

			let table = document.createElement("table");
			table.id = "adsTable";
			table.classList.add("container", "table");

			tableCont.appendChild(table);
			document.body.appendChild(tableCont);
		}
		else (
			document.body.appendChild(tableCont)
		)

		// Check if the table already exists in the DOM
		let table = document.getElementById("adsTable");
		if (!table) {
			return;
		}
		// Clear the table before populating it with new data
		table.innerHTML = " ";

		// Create table header
		let headerRow = table.createTHead().insertRow();
	
		let titleHeader = headerRow.insertCell();
		let categoryHeader = headerRow.insertCell(1);
		let descriptionHeader = headerRow.insertCell(2);
		let priceHeader = headerRow.insertCell(3);
		let imagesHeader = headerRow.insertCell(4);
		headerRow.className = ""

		titleHeader.innerHTML = "Title";
		categoryHeader.innerHTML = "Category";
		descriptionHeader.innerHTML = "Description";
		priceHeader.innerHTML = "Price";
		imagesHeader.innerHTML = "Images";

		// Iterate through the ads object and add each ad to the table
		
		for (let key in products) {
			console.log(key)
			let ad = products[key];
			
			let row = table.insertRow();
			row.classList.add("adsrow")
			let titleCell = row.insertCell(0);
			let categoryCell = row.insertCell(1);
			let descriptionCell = row.insertCell(2);
			let priceCell = row.insertCell(3);
			let imagesCell = row.insertCell(4);
			let imgg = document.createElement("img")
			imagesCell.appendChild(imgg)
			let functioncell = row.insertCell(5);
			let commentsRow = table.insertRow();
			let commentsCell = commentsRow.insertCell(0);
			commentsCell.classList.add("commentcell")
			// let commenth1 = document.createElement("h1");
			let commentInput = document.createElement("input");
			let submitcomment = document.createElement("button");
			functioncell.classList.add("buttons")
			submitcomment.innerHTML = "Submit";
			commentsCell.colSpan = 6;
			
		// commentsCell.appendChild(commenth1)
			
			

				
			titleCell.innerHTML = ad.Title;
			categoryCell.innerHTML = ad.Category;
			descriptionCell.innerHTML = ad.Description;
			priceCell.innerHTML = ad.Price;
			imgg.src = ad.Image;
			let deleteButton = document.createElement("button");
			let updatebutton = document.createElement("button");
			updatebutton.id = "update"
			deleteButton.innerHTML = "Delete";
			updatebutton.innerHTML = "Update";
			
			functioncell.appendChild(deleteButton)
			functioncell.appendChild(updatebutton)
			deleteButton.addEventListener("click", () => { deleteProduct(uid, key) });
			updatebutton.addEventListener("click", () => { updateData(uid, key) });
			readComment(uid, commentInput, key, commentsCell, ad)
			commentsCell.appendChild(commentInput);
			commentsCell.appendChild(submitcomment);
			submitcomment.addEventListener("click", () => {
				// Get the comment text from the input field
				let commentText = commentInput.value;
				
				if (commentText.trim() === "") {
					alert("Please fill in field before submitting");
					return;
				}
				
				
				// Get a reference to the product's comments array in the database
				push(ref(db, 'users/' + uid + "/products/" + key), {
					Comment: commentText,
					timestamp: Date.now()
				})
			})
			
			
			}


	}
	)
}

let removetable = () => {
	document.getElementById("tableCont").remove();

}
const clearhtml = () => {
	document.querySelector("table").innerHTML = "";
}

function insertData(uid) {

	const db = getDatabase();
	console.log("insertfunc")
	let inputTitle = document.getElementById("it");
	let inputCategory = document.getElementById("ic");
	let inputDesc = document.getElementById("id");
	let inputPrice = document.getElementById("ip");
	let inputImg = document.getElementById("ii");
	if (inputTitle.value.trim() === "" || inputCategory.value.trim() === "" || inputDesc.value.trim() === "" || inputPrice.value.trim() === "" || inputImg.value.trim() === "") {
		alert("Please fill in all the fields before submitting");
		return;
	}
	else {
		push(ref(db, 'users/' + uid + "/products/"), {
			Title: inputTitle.value,
			Category: inputCategory.value,
			Description: inputDesc.value,
			Price: inputPrice.value + "E",
			Image: inputImg.value,

		})


			.then(() => {
				alert("Added success");
			})
			.catch((error) => {
				alert(error);
			})
	}
}
function readComment(uid, commentInput, key, commentsCell, ad) {
	const db = getDatabase();
	console.log("insertcomments");
	onValue(ref(db, 'users/' + uid + "/products/" + key), (snapshot) => {
	  let products = snapshot.val();
	  console.log(products);
	  for (let key in products) {
		if (products[key].hasOwnProperty("Comment")) {
		  console.log(key);
		  console.log(products[key]);
		  let h5 = document.createElement("h5");
		  h5.innerHTML = (`Comment: ` +products[key].Comment)
		  console.log(h5);
		  commentsCell.appendChild(h5);
		  console.log(commentsCell);
		}
	  }
	  return commentsCell;
	});
  }
  











function htmlElements(html) {
	const main = document.createElement("template");
	main.innerHTML = html.trim();
	document.body.append(main.content.firstElementChild);
}

// change background img

let currentBackground;

function changeBackground() {
	document.html.style.backgroundImage = " ";

}

const deleteProduct = (uid, productUID) => {
	const db = getDatabase();
	console.log("Deletefunc")
	console.log(productUID)
	// Reference the specific product in the database using its UID
	const productRef = ref(db, 'users/' + uid + "/products/" + productUID);

	// Use the remove() method to delete the product
	remove(productRef)
		.then(() => {
			console.log("Product deleted successfully");
		})
		.catch((error) => {
			console.log("Error deleting product: ", error);
		});

}
function updateData(uid, key, productUID) {
	const db = getDatabase();
	console.log("Updatefunc")
	console.log(uid)
	console.log(key)

	console.log("updatefunc")
	let inputTitle = document.getElementById("it");
	let inputCategory = document.getElementById("ic");
	let inputDesc = document.getElementById("id");
	let inputPrice = document.getElementById("ip");
	let inputImg = document.getElementById("ii");
	if (inputTitle.value.trim() === "" || inputCategory.value.trim() === "" || inputDesc.value.trim() === "" || inputPrice.value.trim() === "" || inputImg.value.trim() === "") {
		alert("Please fill in all the fields before submitting");
		return;
	}
	else {
		update(ref(db, 'users/' + uid + "/products/" + key), {
			Title: inputTitle.value,
			Category: inputCategory.value,
			Description: inputDesc.value,
			Price: inputPrice.value + "E",
			Image: inputImg.value
		})
			.then(() => {
				alert("Product Updated Successfully");
			})
			.catch((error) => {
				alert(error);
			})
	}
}
function adminPanel() {
	const categoriesForm = htmlElements(`<div id="main">
											<form id="categoriesForm">
												<input type="text" id="categoryInput" placeholder="category"/>
												<input type="submit" value="Add" id="addCategoryBtn"/>
											</form>
											<div id="categoriesContainer">
												<div id="categoriesInner">
													<ul id="categoriesList"></ul>
												</div>
											</div>
											<div id="usersDivContainer">
												<div id="usersDiv">
												</div>
											</div>
										  </div>
										  `);
	// displayCategories();
	// usersTable();
	document.getElementById("addCategoryBtn").addEventListener("click", (e) => {
	  e.preventDefault();
	  if (!document.getElementById("categoryInput").value.trim()) {
		console.log("No defined categories");
	  } else {
		addCategories(document.getElementById("categoryInput").value);
	  }
	});
  }
  
  function addCategories(categoryInput) {
	const pushWithoutID = push(ref(db, "categories/"), {
	  id: "id",
	  name: categoryInput,
	});
	const pushKey = pushWithoutID.key;
  
	update(ref(db, "categories/" + pushKey), {
	  id: pushKey,
	})
	  .then(() => {
		console.log("Category added!");
	  })
	  .catch((error) => {
		console.log(error);
	  });
  }
  
  function displayCategories() {
	const db = getDatabase();
	onValue(ref(db, "categories/"), (snapshot) => {
	  const categories = snapshot.val();
	  
	  if (!categories) {
		console.log("There is no categories");
		return false;
	  }
  
	  const categoriesList = document.getElementById("categoriesList");
	  categoriesList.innerHTML = "";
	  for (let key in categories) {
		let category = categories[key];
		let listItem = document.createElement("li");
		listItem.innerHTML = category.name;
		listItem.id = category.id;
		categoriesList.appendChild(listItem);
		let deleteIcon = document.createElement("img");
		deleteIcon.src = " ../img/close.svg";
		deleteIcon.id = category.id;
		deleteIcon.classList.add("closeIcon");
		listItem.appendChild(deleteIcon);
  
		deleteIcon.addEventListener("click", (e) => {
		  deleteCategory(e.target.id);
		});
	  }
	});
  
	function deleteCategory(id) {
	  remove(ref(db, "categories/" + id));
	}
  }
  export function role_validation(user, ) {
	const db = getDatabase();
	console.log(user.data)
    onValue(ref(db, "users/", user.uid), (snapshot) => {
        const userData = snapshot.val();
		console.log(snapshot)
        if (userData.role == "simple_user") {
            ads_form(user);
            typeOfTable(user);
        } else {
            adminPanel();
            console.log("Admin panel")
        }
    })
}