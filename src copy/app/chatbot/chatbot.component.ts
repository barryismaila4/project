import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'] // styleUrls avec 's' pour éviter l'erreur
})
export class ChatbotComponent {
  userMessage: string = '';
  chatHistory: { message: string, sender: string }[] = [];

  // Liste des cours de danse avec des descriptions
  danceCourses: { [key: string]: string } = {
    'ballet': 'Le ballet est une danse classique qui se caractérise par des mouvements gracieux et précis. Il se danse sur de la musique classique et demande de la technique et de la souplesse. Les danseurs de ballet portent souvent des pointes et des tutus. C’est une danse exigeante qui nécessite une discipline stricte. Le ballet est l’un des styles de danse les plus respectés et appréciés au monde.',
    'jazz': 'La danse jazz est un style dynamique qui met l’accent sur l’énergie, le rythme et l’expression. Elle est souvent dansée sur des musiques modernes ou de jazz. Les mouvements de jazz incluent des sauts, des pirouettes et des isolations corporelles. C’est une danse qui permet de montrer sa personnalité et son style. Le jazz est souvent utilisé dans les comédies musicales et les spectacles.',
    'hip-hop': 'Le hip-hop est une danse urbaine qui est née dans les rues de New York dans les années 1970. Elle se caractérise par des mouvements rythmés et des figures acrobatiques. Les danseurs de hip-hop expriment souvent des émotions ou racontent des histoires à travers leurs mouvements. Le style inclut également des sous-genres comme le popping, le locking et le breakdance. C’est un style de danse libre qui encourage la créativité.',
    'contemporain': 'La danse contemporaine est un mélange de plusieurs styles de danse. Elle met l’accent sur l’expression émotionnelle et la fluidité des mouvements. Les chorégraphies contemporaines sont souvent abstraites et expérimentales. Les danseurs utilisent leur corps pour explorer des concepts comme la gravité, le poids et le mouvement. C’est une danse qui offre une grande liberté d’interprétation.',
    'salsa': 'La salsa est une danse latine qui se danse généralement en couple. Elle est née à Cuba et a été influencée par divers styles de danse afro-caribéens. Les mouvements de la salsa sont rapides et rythmés, souvent sur une musique vibrante et joyeuse. La danse implique beaucoup de tours et d’interactions avec le partenaire. La salsa est populaire dans les soirées dansantes du monde entier.',
    'tango': 'Le tango est une danse de salon sensuelle et élégante qui est originaire d’Argentine. Il se danse généralement en couple, avec des mouvements lents et des pauses dramatiques. Le tango est connu pour son style passionné et ses postures raffinées. Il met en avant l’interaction entre les partenaires et l’improvisation. La musique de tango est souvent jouée par des instruments comme le bandonéon.',
    'bharatanatyam': 'Le Bharatanatyam est une danse classique indienne originaire du Tamil Nadu. Elle combine des expressions faciales, des mudras (gestes des mains) et des mouvements rythmiques des pieds. Cette danse est ancrée dans les mythes et légendes de la culture hindoue. Les danseurs portent des costumes colorés et des bijoux traditionnels. Le Bharatanatyam est souvent interprété lors de festivals culturels.',
    'kathak': 'Le Kathak est une danse classique indienne qui raconte des histoires à travers des gestes gracieux. Les danseurs de Kathak utilisent des pirouettes rapides et des expressions faciales. Le Kathak est souvent accompagné de musique classique hindoustanie. C’est un style de danse qui combine la musique, la poésie et le drame. Le Kathak est très populaire dans le nord de l’Inde.',
    'danse africaine': 'Les danses africaines sont riches en culture et varient selon les régions du continent. Elles se caractérisent par des mouvements rythmiques et énergétiques. Les danses sont souvent accompagnées de percussions et de chants traditionnels. Elles sont utilisées pour célébrer divers événements comme les mariages ou les naissances. La danse africaine exprime la joie, la communauté et la spiritualité.',
    'breakdance': 'Le breakdance, également connu sous le nom de b-boying, est un style de danse acrobatique qui fait partie de la culture hip-hop. Il se compose de mouvements au sol, de figures comme le headspin et des freezes. Les danseurs, appelés b-boys et b-girls, rivalisent souvent lors de battles. Le breakdance met l’accent sur la force, la flexibilité et la créativité. Il est populaire dans les compétitions de danse de rue.',
    'danse de salon': 'Les danses de salon incluent divers styles comme la valse, le cha-cha-cha, et la rumba. Elles se dansent en couple et mettent en avant la coordination entre les partenaires. Les compétitions de danse de salon sont souvent très techniques. Ces danses sont associées à l’élégance et à la synchronisation. Les danses de salon sont pratiquées lors de soirées et d’événements sociaux.',
    'danse orientale': 'La danse orientale, également appelée danse du ventre, est originaire du Moyen-Orient. Elle met l’accent sur les mouvements du bassin, des hanches et du ventre. Les danseuses portent souvent des costumes ornés de bijoux. La danse orientale est sensuelle et expressive. Elle est très populaire dans les festivals et spectacles de danse.',
    'reggaeton': 'Le reggaeton est une danse urbaine originaire d’Amérique latine, souvent dansée sur de la musique reggaeton. Elle se caractérise par des mouvements sensuels et des isolations du corps. Le reggaeton est influencé par le hip-hop et la danse latine. C’est une danse populaire dans les clubs et les soirées. Elle est souvent associée à une énergie festive et décontractée.',
    'kizomba': 'La kizomba est une danse angolaise qui se danse en couple. Elle est caractérisée par des mouvements lents et fluides. La kizomba est souvent décrite comme une danse sensuelle et romantique. Les danseurs se déplacent en harmonie sur de la musique douce. La kizomba est devenue très populaire dans les festivals de danse en Europe et ailleurs.',
    'swing': 'Le swing est une danse joyeuse et énergique qui est née dans les années 1920. Elle est généralement dansée sur du jazz ou du rockabilly. Les styles de swing incluent le lindy hop, le charleston et le balboa. Le swing met l’accent sur les figures rapides et les sauts. C’est une danse sociale qui se danse dans des clubs et lors d’événements vintage.',
    'flamenco': 'Le flamenco est une danse espagnole qui combine le chant, la guitare et les claquements de mains. Elle est connue pour son intensité émotionnelle et ses mouvements frappés. Le flamenco met en avant l’interaction entre le danseur, le musicien et le chanteur. Les danseurs de flamenco portent souvent des robes à volants et utilisent des castagnettes. C’est une danse passionnée qui exprime la douleur, la joie et la fierté.',
    'danse folklorique': 'Les danses folkloriques varient selon les cultures et les régions. Elles sont souvent interprétées lors de festivals et événements traditionnels. Les mouvements de danse racontent des histoires ou célèbrent des coutumes. Les danseurs portent des costumes traditionnels colorés. Les danses folkloriques sont ancrées dans l’histoire et les traditions locales.',
    'dancehall': 'Le dancehall est une danse originaire de Jamaïque, influencée par la culture reggae. Elle se caractérise par des mouvements explosifs et une grande expressivité. Le dancehall est souvent dansé sur de la musique dancehall, qui a un tempo rapide et énergique. Les danseurs expriment leur créativité à travers des chorégraphies uniques. Le dancehall est populaire dans les compétitions et les clubs de danse.',
    'popping et locking': 'Le popping et le locking sont des styles de danse urbaine qui font partie du hip-hop. Le popping utilise des contractions musculaires pour créer des mouvements saccadés. Le locking, quant à lui, inclut des mouvements rapides des bras et des poignets. Ces styles sont souvent utilisés dans les battles de danse. Le popping et le locking demandent beaucoup de précision et de technique.',
    'zumba': 'La zumba est une danse fitness qui combine des mouvements de danse et d’aérobic. Elle se danse sur des musiques latines comme la salsa, le merengue et le reggaeton. Les séances de zumba sont très dynamiques et aident à améliorer la condition physique. C’est une activité ludique qui peut être pratiquée par tous les âges. La zumba est populaire dans les salles de sport du monde entier.',
    'bollywood': 'La danse Bollywood est inspirée des films indiens, combinant des mouvements classiques et modernes. Elle inclut des expressions faciales exagérées et des gestes de la main. Les danseurs portent des costumes colorés et dansent sur de la musique joyeuse. Les chorégraphies de Bollywood racontent souvent des histoires d’amour et de joie. C’est une danse qui célèbre la culture et la diversité de l’Inde.'
    
  };

 // Réponses spécifiques à certaines questions
specificResponses: { [key: string]: string } = {
  'ou se trouve les cours de dance?': 'Les cours de danse se trouvent dans la section "Catégorie". Cliquez ensuite sur "Style", puis sur "View Course" et vous verrez les cours disponibles.',
  'salut': 'Salut ! Comment puis-je t’aider ?',
  'quels styles de danse enseignez-vous ?': 'Nous enseignons le ballet, le jazz, le hip-hop, la salsa, le tango, et bien d’autres styles de danse.'
};


  sendMessage(): void {
    if (this.userMessage.trim()) {
      // Ajouter le message de l'utilisateur dans l'historique
      this.chatHistory.push({ message: this.userMessage, sender: 'user' });

      let botResponse = '';

      // Normaliser le message de l'utilisateur pour faciliter la comparaison
      const lowerCaseMessage = this.userMessage.toLowerCase();

      // Vérifier d'abord les réponses spécifiques
      if (this.specificResponses[lowerCaseMessage]) {
        botResponse = this.specificResponses[lowerCaseMessage];
      }
      // Vérifier ensuite si l'utilisateur a mentionné un des cours de danse
      else if (this.danceCourses[lowerCaseMessage]) {
        botResponse = this.danceCourses[lowerCaseMessage];
      } 
      // Réponse par défaut si la question n'est pas comprise
      else {
        botResponse = 'Je ne comprends pas encore cette question.';
      }

      // Ajouter la réponse du chatbot dans l'historique
      this.chatHistory.push({ message: botResponse, sender: 'bot' });

      // Réinitialiser le message de l'utilisateur
      this.userMessage = '';
    }
  }
}