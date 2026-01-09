//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaSeq) => {
  let dna = dnaSeq.split("");
  return dna.map(DnsToRna).join("");
};

function DnsToRna(dna) {
  switch (dna) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      return "";
  }
}
