

export class TermEnglish {
  _id?: string;
  wordEnglish: string;
  wordNonEnglish?: string;
  wordExpanded?: string;
  languageCode: string;
  image: string;
  imageType?: string;
  audio?: string;
  audioType?: string;
  linkAuthoritative: string;
  linkWikipedia?: string;
  linkYouTube?: string;
  authorName: string;
  dateCreated?: string;
  dateRevised?: string;
  fieldOfStudy: string;
  helpYes?: number;
  helpNo?: number;
  definitions: Definition[];
}

export class Definition {

  constructor() {
    let now = new Date();
    this.dateCreated = now.toISOString();
    this.quality = 0;
    this.likes = 0;
  }
  _id?: string;
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  likes: number;
}

export class AddTermEnglish {
  wordEnglish: string;
  wordNonEnglish?: string;
  wordExpanded?: string;
  languageCode: string;
  image: string;
  imageType?: string;
  audio?: string;
  audioType?: string;
  linkAuthoritative: string;
  linkWikipedia?: string;
  linkYouTube?: string;
  authorName: string;
  dateCreated?: string;
  dateRevised?: string;
  fieldOfStudy: string;
  helpYes?: number;
  helpNo?: number;
  definitions: [
    {
      authorName: string;
      dateCreated: string;
      definition: string;
      quality: number;
      likes: number;
    }
  ]
}

export class AddDefinition {

  constructor() {
    let now = new Date();
    this.dateCreated = now.toISOString();
    this.quality = 0;
    this.likes = 0;
  }
  authorName: string;
  dateCreated: string;
  definition: string;
  quality: number;
  likes: number;
}

export class LikeIncrease {
  likes: number;
}
