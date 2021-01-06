const Mixins = {
	methods: {
		capitalizeFirstLetter: str => str.replace(/(^|\s)\S/g, l => l.toUpperCase()),
		formartMoney: money => {
			let newvalue = "0.00";
			if (money != null) {
				let value = Number(money);
				newvalue = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
			}
			return newvalue.replace(".00", "");
		},
	}
}

export default Mixins