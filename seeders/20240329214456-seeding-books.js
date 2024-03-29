'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();
    const books = [
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        description: 'The first book in the Harry Potter series by J.K. Rowling, following the journey of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry.',
        image_url: 'https://m.media-amazon.com/images/I/81q77Q39nEL._SL1500_.jpg',
        release_year: 1997,
        price: 'IDR 149000',
        total_page: 320,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 4, // Assuming category ID for Fantasy
      },
      {
        title: 'The Hunger Games',
        description: 'A dystopian novel by Suzanne Collins, set in a post-apocalyptic nation called Panem, where children from the districts are forced to participate in a televised death match called the Hunger Games.',
        image_url: 'https://m.media-amazon.com/images/I/71un2hI4mcL._SL1500_.jpg',
        release_year: 2008,
        price: 'IDR 99000',
        total_page: 374,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'The Da Vinci Code',
        description: 'A mystery thriller novel by Dan Brown, following symbologist Robert Langdon and cryptologist Sophie Neveu as they investigate a murder in the Louvre Museum and unravel a secret society and religious mystery.',
        image_url: 'https://m.media-amazon.com/images/I/91InVm4TEgL._SL1500_.jpg',
        release_year: 2003,
        price: 'IDR 149000',
        total_page: 489,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'The Kite Runner',
        description: 'A novel by Khaled Hosseini, following the story of Amir, a young boy from Kabul, Afghanistan, and his journey to seek redemption for betraying his childhood friend Hassan.',
        image_url: 'https://m.media-amazon.com/images/I/81LVEH25iJL._SL1500_.jpg',
        release_year: 2003,
        price: 'IDR 104000',
        total_page: 371,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'The Girl with the Dragon Tattoo',
        description: 'A psychological thriller novel by Swedish author Stieg Larsson, featuring journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate the disappearance of a woman from a wealthy family.',
        image_url: 'https://m.media-amazon.com/images/I/518UXjrLGGL.jpg',
        release_year: 2005,
        price: 'IDR 169000',
        total_page: 672,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'The Help',
        description: 'A novel by Kathryn Stockett, set in Jackson, Mississippi, during the early 1960s, highlighting the lives of African American maids working in white households.',
        image_url: 'https://m.media-amazon.com/images/I/513lJz2uywL.jpg',
        release_year: 2009,
        price: 'IDR 99000',
        total_page: 544,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'The Goldfinch',
        description: 'A novel by Donna Tartt, following the life of Theodore Decker after surviving a terrorist bombing at an art museum, leading to his involvement in art theft and forgery.',
        image_url: 'https://m.media-amazon.com/images/I/51IbuiT-ndL.jpg',
        release_year: 2013,
        price: 'IDR 137000',
        total_page: 864,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'Gone Girl',
        description: 'A thriller novel by Gillian Flynn, revolving around the mysterious disappearance of Amy Dunne and the suspicions surrounding her husband, Nick.',
        image_url: 'https://m.media-amazon.com/images/I/41x6HtLdEhL.jpg',
        release_year: 2012,
        price: 'IDR 125000',
        total_page: 422,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'Crazy Rich Asians',
        description: 'A romantic comedy novel by Kevin Kwan, following the lives of wealthy Chinese families living in Singapore, particularly focusing on the relationship between Rachel Chu and Nicholas Young.',
        image_url: 'https://m.media-amazon.com/images/I/41PZWve99aL.jpg',
        release_year: 2013,
        price: 'IDR 86000',
        total_page: 527,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 10, // Assuming category ID for Romance
      },
      {
        title: 'Educated: A Memoir',
        description: 'A memoir by Tara Westover, recounting her journey from growing up in a strict household with minimal formal education to eventually earning a PhD from the University of Cambridge.',
        image_url: 'https://m.media-amazon.com/images/I/41goWDE1PUL.jpg',
        release_year: 2018,
        price: 'IDR 112000',
        total_page: 334,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 7, // Assuming category ID for Biography
      },
      {
        title: 'The Night Circus',
        description: 'A fantasy novel by Erin Morgenstern, revolving around a magical competition between two young illusionists, Celia and Marco, who are bound by fate and love.',
        image_url: 'https://m.media-amazon.com/images/I/51iML7T0PvL.jpg',
        release_year: 2011,
        price: 'IDR 132000',
        total_page: 400,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 4, // Assuming category ID for Fantasy
      },
      {
        title: 'The Silent Patient',
        description: 'A psychological thriller novel by Alex Michaelides, following Alicia Berenson, a famous painter who stops speaking after murdering her husband, and the efforts of her psychotherapist to unravel the mystery.',
        image_url: 'https://m.media-amazon.com/images/I/515SxVllQJS.jpg',
        release_year: 2019,
        price: 'IDR 107000',
        total_page: 336,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'Eleanor Oliphant Is Completely Fine',
        description: 'A novel by Gail Honeyman, following the socially awkward and routine-oriented Eleanor Oliphant as she navigates life and forms an unexpected friendship with Raymond, a coworker.',
        image_url: 'https://m.media-amazon.com/images/I/413XS+HZuML.jpg',
        release_year: 2017,
        price: 'IDR 98000',
        total_page: 327,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'Becoming',
        description: 'A memoir by Michelle Obama, recounting her experiences from childhood to her time as First Lady of the United States, and her journey of self-discovery and personal growth.',
        image_url: 'https://m.media-amazon.com/images/I/51QMk4Lt1kL.jpg',
        release_year: 2018,
        price: 'IDR 121000',
        total_page: 426,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 7, // Assuming category ID for Biography
      },
      {
        title: 'The Fault in Our Stars',
        description: 'A young adult novel by John Green, following the love story of Hazel Grace Lancaster, a sixteen-year-old cancer patient, and Augustus Waters, a fellow cancer survivor.',
        image_url: 'https://m.media-amazon.com/images/I/61fbVx3W5cL._SL1200_.jpg',
        release_year: 2012,
        price: 'IDR 101000',
        total_page: 313,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'The Alchemist',
        description: 'A philosophical novel by Paulo Coelho, following the journey of Santiago, an Andalusian shepherd boy, as he travels to Egypt in search of a treasure.',
        image_url: 'https://m.media-amazon.com/images/I/71zHDXu1TaL._SL1500_.jpg',
        release_year: 1988,
        price: 'IDR 132000',
        total_page: 208,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'Me Before You',
        description: 'A romance novel by Jojo Moyes, following the relationship between Louisa Clark, a young woman struggling to find employment, and Will Traynor, a quadriplegic man.',
        image_url: 'https://m.media-amazon.com/images/I/41RcepPXgpL.jpg',
        release_year: 2012,
        price: 'IDR 107000',
        total_page: 369,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 10, // Assuming category ID for Romance
      },
      {
        title: 'The Martian',
        description: 'A science fiction novel by Andy Weir, following astronaut Mark Watney as he becomes stranded on Mars and must use his ingenuity to survive while NASA works to bring him back to Earth.',
        image_url: 'https://m.media-amazon.com/images/I/414J3xG+7+L.jpg',
        release_year: 2011,
        price: 'IDR 139000',
        total_page: 369,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 3, // Assuming category ID for Science Fiction
      },
      {
        title: 'Where the Crawdads Sing',
        description: 'A mystery novel by Delia Owens, following the life of Kya Clark, known as the "Marsh Girl," and the investigation into the death of Chase Andrews in a quiet town in North Carolina.',
        image_url: 'https://m.media-amazon.com/images/I/51MnNmMUHhL.jpg',
        release_year: 2018,
        price: 'IDR 143000',
        total_page: 384,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'Circe',
        description: 'A fantasy novel by Madeline Miller, retelling the story of Circe, a minor goddess of magic in Greek mythology, and her interactions with famous figures such as Odysseus and Athena.',
        image_url: 'https://m.media-amazon.com/images/I/617ySf3g9bL.jpg',
        release_year: 2018,
        price: 'IDR 149000',
        total_page: 400,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 4, // Assuming category ID for Fantasy
      },
      {
        title: 'Big Little Lies',
        description: 'A mystery novel by Liane Moriarty, revolving around the lives of three women in a seaside town in Australia, whose lives unravel amid secrets, lies, and scandal.',
        image_url: 'https://m.media-amazon.com/images/I/51oEjWgMHuL.jpg',
        release_year: 2014,
        price: 'IDR 77000',
        total_page: 460,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'The Girl on the Train',
        description: 'A psychological thriller novel by Paula Hawkins, following Rachel Watson as she becomes entangled in the investigation of a missing woman, Megan Hipwell, while battling alcoholism and memory loss.',
        image_url: 'https://m.media-amazon.com/images/I/51sKhh+VEML.jpg',
        release_year: 2015,
        price: 'IDR 128000',
        total_page: 336,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 5, // Assuming category ID for Mystery
      },
      {
        title: 'All the Light We Cannot See',
        description: 'A novel by Anthony Doerr, set during World War II, following the parallel lives of a blind French girl, Marie-Laure LeBlanc, and a German orphan, Werner Pfennig, as their paths eventually converge.',
        image_url: 'https://m.media-amazon.com/images/I/51c8HcK4DML.jpg',
        release_year: 2014,
        price: 'IDR 129000',
        total_page: 544,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'The Book Thief',
        description: 'A novel by Markus Zusak, narrated by Death, following the story of Liesel Meminger, a young girl living in Nazi Germany, who steals books and shares them with her neighbors and the Jewish man hiding in her basement.',
        image_url: 'https://m.media-amazon.com/images/I/51Rs-tsiwBL.jpg',
        release_year: 2005,
        price: 'IDR 59000',
        total_page: 592,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'To Kill a Mockingbird',
        description: 'A novel by Harper Lee, set in the fictional town of Maycomb, Alabama, during the Great Depression.',
        image_url: 'https://m.media-amazon.com/images/I/51HrCuHBn+L.jpg',
        release_year: 1960,
        price: 'IDR 97000',
        total_page: 336,
        thickness: "tebal",
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 1, // Assuming category ID for Fiction
      },
      {
        title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
        description: 'A self-help book by James Clear, offering practical strategies for building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.',
        image_url: 'https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg',
        release_year: 2018,
        price: 'IDR 207000',
        total_page: 320,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 2, // Assuming category ID for Non-Fiction
      },
      {
        title: 'Good to Great: Why Some Companies Make the Leap... and Others Don\'t',
        description: 'A management book by Jim Collins, exploring why some companies thrive while others fail, and identifying key principles that enable companies to transition from good to great.',
        image_url: 'https://m.media-amazon.com/images/I/41tCQsn8UGL.jpg',
        release_year: 2001,
        price: 'IDR 259000',
        total_page: 320,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 2, // Assuming category ID for Non-Fiction
      },
      {
        title: 'Sapiens: A Brief History of Humankind',
        description: 'A book by Yuval Noah Harari, providing a narrative of the history of Homo sapiens, from the emergence of archaic human species in Africa to the present day.',
        image_url: 'https://m.media-amazon.com/images/I/51XyWW6zEXL.jpg',
        release_year: 2011,
        price: 'IDR 177000',
        total_page: 443,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 2, // Assuming category ID for Non-Fiction
      },
      {
        title: 'Blink: The Power of Thinking Without Thinking',
        description: 'A book by Malcolm Gladwell, exploring the concept of "thin-slicing" and how snap judgments and decisions can be as effective as careful analysis when made in the blink of an eye.',
        image_url: 'https://m.media-amazon.com/images/I/417cu5MG5QL.jpg',
        release_year: 2005,
        price: 'IDR 146000',
        total_page: 296,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 2, // Assuming category ID for Non-Fiction
      },
      {
        title: 'The Power of Habit: Why We Do What We Do in Life and Business',
        description: 'A book by Charles Duhigg, exploring the science behind habit formation and how understanding habits can transform individuals, organizations, and societies.',
        image_url: 'https://m.media-amazon.com/images/I/41-zoyxnXiL.jpg',
        release_year: 2012,
        price: 'IDR 111000',
        total_page: 371,
        thickness: 'tebal',
        created_at: currentDate,
        updated_at: currentDate,
        category_id: 2, // Assuming category ID for Non-Fiction
      },
    ];

    await queryInterface.bulkInsert('Books', books);
  },

  async down(queryInterface, _) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
