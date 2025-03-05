// Sample user data (replace with actual data from your database or API)
const userData = {
  profilePhoto: 'https://example.com/profile-photo.jpg',
  fullName: 'Riya Chavan',
  email:'Riyachavan@gmail.com',
  prnNo: 'PRN123456'
};

// Set profile photo
document.getElementById('profile-photo').src = userData.profilePhoto;

// Set full name
document.getElementById('full-name').textContent = userData.fullName;

// Set email
document.getElementById('email').textContent = userData.email;

// Set PRN number
document.getElementById('prn-no').textContent = userData.prnNo;



