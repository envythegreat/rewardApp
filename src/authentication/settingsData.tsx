export const dataArray = [
  { title: "Profile Information", 
    content: [
      {
        iconName:'mail',
        placeholder: 'Email Address',
        refs:'Email',
        keyboardType: 'email-address',
        handleState: () => console.log('gg')
      },
      {
        iconName:'user',
        placeholder: 'Full Name',
        refs:'FullName',
        keyboardType: 'default',
        handleState: () => console.log('gg')
      },
      {
        iconName:'map-pin',
        placeholder: 'Street Address',
        refs:'Address',
        keyboardType: 'default',
        handleState: () => console.log('gg')
      }
    ],
    button:{
      textInside: 'Update your Profile',
      onSubmitbtn: () => console.log('Updated')
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
        handleState: () => console.log('gg')
      },
      {
        iconName:'lock',
        placeholder: 'New Password',
        refs:'NewPassword',
        textEntry: true,
        keyboardType: 'default',
        handleState: () => console.log('gg')
      },
      {
        iconName:'lock',
        placeholder: 'Confirm New Password',
        refs:'CNewPassword',
        textEntry: true,
        keyboardType: 'default',
        handleState: () => console.log('gg')
      }
    ],
    button:{
      textInside: 'Update Security Info',
      onSubmitbtn: () => console.log('Updated')
    }
  },
  { title: "Payout Settings", 
    content:[
      {
        iconName:'mail',
        placeholder: 'Paypal Email',
        refs:'Email',
        keyboardType: 'email-address',
        handleState: () => console.log('gg')
      }
    ],
    button:{
      textInside: 'Update Payout Settings',
      onSubmitbtn: () => console.log('Updated')
    }
  },
];