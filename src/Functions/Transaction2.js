const currencyConversionRate = [
  { value: "INR", rate: 1 },
  { value: "USD", rate: 74.21 },
  { value: "EUR", rate: 84 },
  { value: "GBP", rate: 102 },
  { value: "JPY", rate: 0.645 },
];

const messageCodes = [
  {
    code: "CHQB",
    instruction: "beneficiary customer must be paid by cheque only.",
  },
  { code: "CORT", instruction: "Payment is made in settlement for a trade." },
  {
    code: "HOLD",
    instruction:
      "Beneficiary customer or claimant will call upon identification.",
  },
  {
    code: "INTC",
    instruction:
      "Payment between two companies that belongs to the same group.",
  },
  {
    code: "PHOB",
    instruction: "Please advise the intermediary institution by phone.",
  },
  { code: "PHOI", instruction: "Please advise the intermediary by phone." },
  {
    code: "PHON",
    instruction: "Please advise the account with institution by phone.",
  },
  { code: "REPA", instruction: "Payments has a related e-Payments reference." },
  {
    code: "SDVA",
    instruction: "Payment must be executed with same day value to the",
  },
];

const transferTypes = [
  "Customer Transfer",
  "Bank Transfer for Own Account"
]

export const getMessageCodes=()=>{
    return messageCodes;
}

export const getCurrencyConversionRates=()=>{
    return currencyConversionRate;
}

export const getTransferType=(type)=>{
  if(type==="customer"){
    return transferTypes[0];
  }else{
    return transferTypes[1];
  }
}

