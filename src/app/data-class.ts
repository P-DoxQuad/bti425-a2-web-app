

export class TermEnglish {
  wordEnglish: string;
  wordNonEnglish: string;
  wordExpanded: string;
  languageCode: string;
  image: string;
  imageType: string;
  audio: string;
  audioType: string;
  linkAuthoritative: string;
  linkWikipedia: string;
  linkYouTube: string;
  authorName: string;
  dateCreated: string;
  dateRevised: string;
  fieldOfStudy: string;
  helpYes: number;
  helpNo: number;
  definitions: Definition;
}

export class Definition {
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  like: number;
}
