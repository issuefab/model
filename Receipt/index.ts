import * as isoly from "isoly"

export interface Receipt {
	original: string
	amount: number
	vat: number
	currency: isoly.Currency
}

export namespace Receipt {
	export function is(value: Receipt | any): value is Receipt & Record<string, any> {
		return (
			typeof value == "object" &&
			typeof value.original == "string" &&
			typeof value.amount == "number" &&
			typeof value.vat == "number" &&
			isoly.Currency.is(value.currency)
		)
	}
}
