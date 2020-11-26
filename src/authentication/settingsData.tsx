export const dataArray = [
  { title: "Profile Information", 
    content: [
      {
        iconName:'mail',
        placeholder: 'Email Address',
        refs:'Email',
        keyboardType: 'email-address',
      },
      {
        iconName:'user',
        placeholder: 'Full Name',
        refs:'FullName',
        keyboardType: 'default',
      },
      {
        iconName:'map-pin',
        placeholder: 'Street Address',
        refs:'Address',
        keyboardType: 'default',
      }
    ],
    button:{
      textInside: 'Update your Profile',
    }
  },
  { title: "Security", 
    content:[
      {
        iconName:'lock',
        placeholder: 'Old Password',
        refs:'OldPassword',
        textEntry: true,
        keyboardType: 'default',
      },
      {
        iconName:'lock',
        placeholder: 'New Password',
        refs:'Password',
        textEntry: true,
        keyboardType: 'default',
      },
      {
        iconName:'lock',
        placeholder: 'Confirm New Password',
        refs:'Password',
        textEntry: true,
        keyboardType: 'default',
      }
    ],
    button:{
      textInside: 'Update Security Info',
    }
  },
  { title: "Payout Settings", 
    content:[
      {
        iconName:'mail',
        placeholder: 'Paypal Email',
        refs:'Email',
        keyboardType: 'email-address',
      }
    ],
    button:{
      textInside: 'Update Payout Settings',
    }
  },
];