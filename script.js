
/* =========================================
   DAILY BIBLE VERSE & INSPIRATION
   No Firebase required
========================================= */

(() => {
  const verses = [
    {
      reference: "PSALM 119:105",
      text: "Thy word is a lamp unto my feet, and a light unto my path.",
      message: "You do not need to know every detail of tomorrow. Let God's Word guide your next step and trust Him with the journey.",
      prayer: "Lord, guide my steps today. Help me trust Your Word and follow Your direction. In Jesus' name, Amen."
    },
    {
      reference: "PROVERBS 3:5",
      text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      message: "When life feels confusing, remember that you can trust God even when you cannot understand everything happening around you.",
      prayer: "Father, help me trust You with all my heart. Give me wisdom and peace as I follow Your way. Amen."
    },
    {
      reference: "PHILIPPIANS 4:13",
      text: "I can do all things through Christ which strengtheneth me.",
      message: "You may feel weak today, but you are not walking alone. Ask Christ for strength to face today's challenges faithfully.",
      prayer: "Jesus, strengthen me when I feel weak. Help me face today with courage, faith, and a grateful heart. Amen."
    },
    {
      reference: "ISAIAH 41:10",
      text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.",
      message: "Fear does not have to control your heart. Remember God's promise of His presence and seek His help in every situation.",
      prayer: "Lord, calm my fears and remind me that You are with me. Give me courage to trust You today. Amen."
    },
    {
      reference: "PSALM 23:1",
      text: "The LORD is my shepherd; I shall not want.",
      message: "God cares for His people like a shepherd cares for his sheep. Rest in His care and seek His guidance when you need direction.",
      prayer: "Good Shepherd, lead me in Your ways. Help me rest in Your care and follow You faithfully. Amen."
    },
    {
      reference: "MATTHEW 11:28",
      text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
      message: "You do not have to carry every burden by yourself. Bring your worries to Jesus and make room for His peace.",
      prayer: "Jesus, I bring my burdens to You. Give my heart rest and help me walk in Your peace. Amen."
    },
    {
      reference: "JEREMIAH 29:11",
      text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
      message: "When the future seems uncertain, continue seeking God. Let hope encourage you to remain faithful through every season.",
      prayer: "Heavenly Father, help me trust You with my future. Teach me to remain faithful and hopeful as I seek You. Amen."
    },
    {
      reference: "ROMANS 8:28",
      text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
      message: "Not every experience is easy, but you can continue trusting God through difficult seasons and seek His purpose in your life.",
      prayer: "Lord, help me trust You in good times and difficult times. Lead me according to Your purpose. Amen."
    },
    {
      reference: "JOSHUA 1:9",
      text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.",
      message: "Take the next step with courage. Remember that faith does not mean you never feel afraid; it means you continue trusting God.",
      prayer: "Lord, give me courage to do what is right. Help me remember Your presence wherever I go. Amen."
    },
    {
      reference: "PSALM 46:1",
      text: "God is our refuge and strength, a very present help in trouble.",
      message: "In times of trouble, turn to God in prayer. He is your refuge, and you can seek His strength when you feel overwhelmed.",
      prayer: "God, be my refuge when life is difficult. Strengthen my faith and help me find peace in You. Amen."
    },
    {
      reference: "MATTHEW 5:16",
      text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
      message: "Your kindness, honesty, and compassion can point others toward God. Let your daily actions reflect the love of Jesus.",
      prayer: "Father, help me be a light to others. Let my words and actions bring glory to You. Amen."
    },
    {
      reference: "PSALM 34:8",
      text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.",
      message: "Take time to notice God's goodness in your life. Thank Him for the blessings you already have, even while you pray for what you need.",
      prayer: "Lord, open my eyes to Your goodness. Grow my gratitude and help me trust You each day. Amen."
    },
    {
      reference: "JOHN 14:27",
      text: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
      message: "The peace Jesus offers is deeper than a trouble-free life. Pause, pray, and bring your anxious thoughts to Him.",
      prayer: "Jesus, fill my heart with Your peace. Help me release my worries and trust You through every circumstance. Amen."
    },
    {
      reference: "1 CORINTHIANS 16:14",
      text: "Let all your things be done with charity.",
      message: "Let love guide how you speak, serve, forgive, and treat others. Small acts of love can make a meaningful difference.",
      prayer: "Lord, fill me with Your love. Help me treat others with kindness, patience, and grace. Amen."
    },
    {
      reference: "GALATIANS 6:9",
      text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.",
      message: "Do not give up on doing what is good. Even when progress feels slow, keep serving faithfully and leave the results in God's hands.",
      prayer: "Father, renew my strength when I grow tired. Help me continue doing good with patience and faith. Amen."
    },
    {
      reference: "PSALM 37:5",
      text: "Commit thy way unto the LORD; trust also in him; and he shall bring it to pass.",
      message: "Place your plans before God in prayer. Work faithfully, seek His wisdom, and trust Him as you move forward.",
      prayer: "Lord, I commit my plans and decisions to You. Lead me in Your wisdom and help me trust Your timing. Amen."
    },
    {
      reference: "ROMANS 12:12",
      text: "Rejoicing in hope; patient in tribulation; continuing instant in prayer;",
      message: "Hold on to hope, remain patient through hardship, and keep praying. Faithfulness in difficult seasons matters too.",
      prayer: "God, keep my hope alive. Teach me patience in trouble and help me remain faithful in prayer. Amen."
    },
    {
      reference: "PSALM 27:1",
      text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?",
      message: "Remember where your strength comes from. When fear rises, turn your attention back to God's faithfulness and care.",
      prayer: "Lord, be my light and strength. Help me face today with confidence in Your care. Amen."
    },
    {
      reference: "1 PETER 5:7",
      text: "Casting all your care upon him; for he careth for you.",
      message: "God invites you to bring your concerns to Him. You can pray honestly and remember that your burdens matter to Him.",
      prayer: "Father, I give You my worries today. Help me trust Your care and walk in peace. Amen."
    },
    {
      reference: "PSALM 121:1-2",
      text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.",
      message: "When you need help, lift your eyes to the Lord. Remember that the Creator of heaven and earth is the One you can call upon.",
      prayer: "Lord, my help comes from You. Guide me, strengthen me, and help me keep my eyes on You. Amen."
    },
    {
      reference: "JOHN 15:5",
      text: "I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.",
      message: "Make time to stay close to Jesus through prayer, worship, and Scripture. Lasting spiritual growth begins with remaining connected to Him.",
      prayer: "Jesus, help me abide in You. Grow my faith and shape my life to bear good fruit. Amen."
    },
    {
      reference: "2 TIMOTHY 1:7",
      text: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
      message: "Do not let fear make every decision for you. Ask God for courage, love, and wisdom as you face today's responsibilities.",
      prayer: "Lord, give me courage, love, and a sound mind. Help me respond to challenges with faith and wisdom. Amen."
    },
    {
      reference: "HEBREWS 11:1",
      text: "Now faith is the substance of things hoped for, the evidence of things not seen.",
      message: "Faith helps you trust God's promises even when you cannot yet see the outcome. Keep praying and taking faithful steps.",
      prayer: "Father, strengthen my faith when I cannot see what lies ahead. Help me trust You one step at a time. Amen."
    },
    {
      reference: "LAMENTATIONS 3:22-23",
      text: "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
      message: "Every new morning is an opportunity to seek God again. His faithfulness gives you reason to begin today with gratitude and hope.",
      prayer: "Lord, thank You for Your mercy and faithfulness. Help me begin this day with a thankful heart. Amen."
    },
    {
      reference: "COLOSSIANS 3:23",
      text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;",
      message: "Whether your task seems important or ordinary, do it with honesty and care. Let your work become an act of service to God.",
      prayer: "Lord, help me serve You through everything I do today. Give me a willing heart and a spirit of excellence. Amen."
    },
    {
      reference: "NUMBERS 6:24-26",
      text: "The LORD bless thee, and keep thee: The LORD make his face shine upon thee, and be gracious unto thee: The LORD lift up his countenance upon thee, and give thee peace.",
      message: "Receive this blessing as a reminder to seek God's presence, grace, and peace. May your day be shaped by faith and kindness.",
      prayer: "Lord, bless and keep us. Let Your grace guide our church and families, and fill our hearts with Your peace. Amen."
    },
    {
      reference: "ROMANS 15:13",
      text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.",
      message: "Ask God to renew your hope and fill your heart with His joy and peace as you continue to trust Him.",
      prayer: "God of hope, fill me with joy and peace. Help me grow in faith through the power of the Holy Ghost. Amen."
    },
    {
      reference: "PSALM 118:24",
      text: "This is the day which the LORD hath made; we will rejoice and be glad in it.",
      message: "You may not control everything that happens today, but you can choose gratitude and look for opportunities to honor God.",
      prayer: "Lord, thank You for this day. Help me rejoice in Your goodness and live today in a way that honors You. Amen."
    },
    {
      reference: "MICAH 6:8",
      text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?",
      message: "Live out your faith through fairness, mercy, and humility. Let your relationship with God influence how you treat every person.",
      prayer: "Father, help me act justly, love mercy, and walk humbly with You. Let my life reflect Your character. Amen."
    },
    {
      reference: "PSALM 56:3",
      text: "What time I am afraid, I will trust in thee.",
      message: "You can acknowledge your fears without surrendering to them. Turn to God and choose to trust Him in the middle of uncertainty.",
      prayer: "Lord, when I feel afraid, remind me to trust You. Give me peace and courage for what lies ahead. Amen."
    },
    {
      reference: "MATTHEW 6:33",
      text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
      message: "Make your relationship with God a priority. Seek His will first, and let your choices reflect the values of His kingdom.",
      prayer: "Father, help me seek Your kingdom first. Guide my priorities and teach me to follow Your ways. Amen."
    }
  ];

  const referenceEl = document.getElementById("daily-verse-reference");
  const textEl = document.getElementById("daily-verse-text");
  const messageEl = document.getElementById("daily-verse-message");
  const prayerEl = document.getElementById("daily-verse-prayer");
  const dateEl = document.getElementById("verse-date");
  const nextBtn = document.getElementById("another-verse-btn");
  const shareBtn = document.getElementById("share-verse-btn");
  const statusEl = document.getElementById("verse-action-status");

  if (
    !referenceEl || !textEl || !messageEl || !prayerEl ||
    !dateEl || !nextBtn || !shareBtn || !statusEl
  ) {
    return;
  }

  // Uses the visitor's local calendar date.
  // The same verse appears all day and changes on the next date.
  function getDayNumber(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const today = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    return Math.floor((today - start) / 86400000);
  }

  function getDailyIndex() {
    const today = new Date();
    return getDayNumber(today) % verses.length;
  }

  let currentIndex = getDailyIndex();

  function showVerse(index) {
    currentIndex = (index + verses.length) % verses.length;
    const verse = verses[currentIndex];

    referenceEl.textContent = verse.reference;
    textEl.textContent = verse.text;
    messageEl.textContent = verse.message;
    prayerEl.textContent = verse.prayer;

    dateEl.textContent = new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    statusEl.textContent = "";
  }

  nextBtn.addEventListener("click", () => {
    showVerse(currentIndex + 1);
  });

  shareBtn.addEventListener("click", async () => {
    const verse = verses[currentIndex];
    const shareText =
      `${verse.reference}\n"${verse.text}"\n\n` +
      `${verse.message}\n\nA prayer: ${verse.prayer}\n\n` +
      "Daily Bible Inspiration";

    try {
      if (navigator.share) {
        await navigator.share({
          title: `Bible Verse - ${verse.reference}`,
          text: shareText
        });
      } else if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        statusEl.textContent = "Verse copied! You can now share it.";
      } else {
        statusEl.textContent =
          "Sharing is unavailable in this browser. You can select and copy the verse text.";
      }
    } catch (error) {
      if (error && error.name !== "AbortError") {
        statusEl.textContent = "Unable to share right now. Please try again.";
      }
    }
  });

  showVerse(currentIndex);
})();
