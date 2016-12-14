export const options = {
  //allowedConnections: ['twitter', 'facebook', 'linkedin'],
  //autofocus: false,
  //autoclose: true,
  additionalSignUpFields: [{
    name: "address",
    placeholder: "enter you address",
    icon: "https://example.com/assets/address_icon.png",
    prefill: "street 123",
    validator: function(address) {
      return {
        valid: address.length >= 10,
        hint: "Must have 10 or more chars"
      };
    }
  },
  {
    name: "full_name",
    placeholder: "Enter your full name"
  }]
}
