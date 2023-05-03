let images=document.querySelectorAll('.single__image')
let imagesArray=Array.from(images)
let mainWord=document.getElementById('mainWord')
let shower=document.getElementById('shower')
let testImage=document.getElementById('testImage')
let imagesId=document.getElementById('imagesId')
let rightScoreValue=document.getElementById('rightScoreValue')
let wrongScoreValue=document.getElementById('wrongScoreValue')
let wordNumber=document.getElementById('wordNumber')
let btn=document.getElementById('btn')
let myAudio=document.getElementById('myAudio')
let body=document.getElementById('body')

let gifSource='./images/image2.gif'
let gifContainer=document.createElement('div')
gifContainer.setAttribute('id','fireWork')

let Whisper="https://thumbs.dreamstime.com/b/whisper-2810423.jpg"
let Mumble="https://thumbs.dreamstime.com/b/whisper-2810423.jpg"
let Annoy='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoP8_Y6353v7ZmOMkoaqlEZjYqqq-WDOF85wzdyLXjw&s'
let Yawn='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLs7XldFURWbNpoVTNzY7XoS4_-miZZkUKWUOMs-EltdZGcrm-g5YAybLsmIvqV4_EGUE&usqp=CAU'
let Consent='https://blog.ipleaders.in/wp-content/uploads/2019/12/Screen-Shot-2019-12-20-at-1.38.49-AM.png'
let Approval='https://blog.ipleaders.in/wp-content/uploads/2019/12/Screen-Shot-2019-12-20-at-1.38.49-AM.png'
let Accord='https://blog.ipleaders.in/wp-content/uploads/2019/12/Screen-Shot-2019-12-20-at-1.38.49-AM.png'
let Plead='https://www.shutterstock.com/image-photo/sincere-request-god-portrait-imploring-260nw-1788822053.jpg'
let Apologize='https://www.shutterstock.com/image-photo/sincere-request-god-portrait-imploring-260nw-1788822053.jpg'
let Provide='https://cdnimgen.vietnamplus.vn/t620/uploaded/wbxx/2021_08_18/hcm.jpg'
let Abstain='https://st3.depositphotos.com/4218696/19027/i/450/depositphotos_190278716-stock-photo-drug-addict-hands-on-dark.jpg'
let Vain='https://ychef.files.bbci.co.uk/1600x900/p0d808l6.webp'
let Storm='https://www.freightwaves.com/wp-content/uploads/2018/10/shutterstock_palm_trees-5-1024x683.jpg'
let Gale='https://www.freightwaves.com/wp-content/uploads/2018/10/shutterstock_palm_trees-5-1024x683.jpg'
let Tempest='https://www.freightwaves.com/wp-content/uploads/2018/10/shutterstock_palm_trees-5-1024x683.jpg'
let Compulsion='https://neurosciencenews.com/files/2020/08/cell-phone-ocd-neurosinceews.jpg'
let Neglect='https://st4.depositphotos.com/17007214/24370/i/450/depositphotos_243701474-stock-photo-young-sad-bored-child-home.jpg'
let Resolve='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStk1mJN8D5pq2QIwM_h8WAXPRocjOsUtWaz8dGAIf92VSnH9POx6EhIkEJnAzw4-wwKes&usqp=CAU'
let Lick='https://www.shutterstock.com/image-photo/closeup-profile-side-view-portrait-600w-1436546852.jpg'
let Courage='https://i.pinimg.com/564x/02/d3/40/02d340d9ca15ede706ec42dd45f24e7b.jpg'
let Inevitable='https://media.istockphoto.com/id/485829350/vector/change-management-consultant.jpg?s=1024x1024&w=is&k=20&c=TqyXilgloE4eCsy1sh3TYZCTQ6XjpSn6s7ZhxpYQxbw='
let Sneeze='https://v5a.imgix.net/black-woman-sneezing.jpg?auto=format%2Cenhance&dpr=1&h=400&ixlib=php-3.3.1&q=75&rect=9%2C0%2C366%2C366&w=400'
let Begger='https://media.istockphoto.com/id/537114599/photo/homeless-begger-begging.jpg?s=1024x1024&w=is&k=20&c=oDpSuop5G3nJpc1h-VqyInYCsWMRP5NYWtMwp2Twtmc='
let Disaster ='https://i.natgeofe.com/n/79dd0b3b-0038-4d3c-a947-a8e3a0ecb9d5/52801_2x1.jpg'
let Distraught='https://www.westend61.de/images/0000695622pw/portrait-of-distraught-young-man-DISF002249.jpg'
let Economical='https://life.futuregenerali.in/media/1115038/tips-and-tricks-for-saving-money-in-your-twenties.webp'
let Emphasize='https://previews.123rf.com/images/iqoncept/iqoncept1208/iqoncept120800030/14783250-the-word-brand-defined-in-a-dictionary-with-definition-explained-to-emphasize-awareness-branding.jpg'
let Extravagant='https://slaylebrity.com/wp-content/uploads/2018/07/IMG_1009.jpg'
let Fire='https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg'
let Gigantic='https://t3.ftcdn.net/jpg/04/23/89/76/240_F_423897647_REQR4EnZ6vsQMWsvYydbiCfM5HE0Zbkr.jpg'
let Impatience='https://static7.depositphotos.com/1155356/729/i/600/depositphotos_7293499-stock-photo-impatient-businessman.jpg'
let Lack='https://www.thestatesman.com/wp-content/uploads/2021/03/water.jpg'
let Scarcity='https://www.thestatesman.com/wp-content/uploads/2021/03/water.jpg'
let Deficiency='https://www.thestatesman.com/wp-content/uploads/2021/03/water.jpg'

let Loot='https://kids.wordsmyth.net/media/wedt/image/robber17.hpi.jpg'
let Miser='https://www.shutterstock.com/image-photo/studio-portrait-funny-unhappy-mature-260nw-1739593469.jpg'
let Stingy='https://www.shutterstock.com/image-photo/studio-portrait-funny-unhappy-mature-260nw-1739593469.jpg'
let Persuade='https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1712/vadymvdrobot171202138/91951638-portrait-of-a-young-casual-couple-standing-together-isolated-over-gray-wall-background-man-asking.jpg'
let Reduce='https://blog.kakaocdn.net/dn/s7aP9/btqEuY3jwrb/Q3X9FPTSq0qORMxKL0LEJ0/img.png'
let Sacrifice='https://media.gettyimages.com/id/1355850109/vector/abrahams-sacrifice-of-isaac-wood-engraving-published-1862.jpg?s=612x612&w=gi&k=20&c=l62LO8XHta83HkUsF_mZ-IPsC29eKHFnX7HLkLtSTOU='
let Seek='https://www.westend61.de/images/0000720640pw/little-boy-and-girl-playing-hide-and-seek-in-nature-ZOCF000119.jpg'
let Strength='https://media.istockphoto.com/id/1341203130/vector/business-strengths-strong-power-to-get-job-done-and-success-career-challenge-or-winning.jpg?s=612x612&w=0&k=20&c=DJLZW_hIX-kocgoFzuWQPVNDkhcGO87dClXI9cmqVOY='
let Suffer='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe7hCbhM5kZ2r3Tx0MOX6KFmLqxJXfBYw3b8EIY07xnF8ZtPLS' 
let Summon='https://www.shutterstock.com/image-photo/guy-calling-someone-smiling-isolated-260nw-222131689.jpg'
let Unpleasant='https://lh3.googleusercontent.com/yl82LivHjCuHOsPlyW41BtVLyk4LoXto-PyYDTytRhcAUj5iq63XbcmxgR4L5PWJudOHN8NOshV-v01EO6kTeoMH0yfi9bP-8s1lNHrGaS4Q'
let Blunder='https://www.henssler.com/wp-content/uploads/2019/05/052319-QOTW.jpg'
let Patience='https://talkshop.ph/blog/wp-content/uploads/2014/05/stay_calm.png'
let Deaf="https://cdn-prod.medicalnewstoday.com/content/images/articles/249/249285/hearing-loss-man.jpg"
let Condemn="https://t3.ftcdn.net/jpg/02/16/02/32/360_F_216023291_8x1p6LyQbHvkP0HEw3pP6zF9UTbRt8zr.jpg"
let Criticize="https://t3.ftcdn.net/jpg/02/16/02/32/360_F_216023291_8x1p6LyQbHvkP0HEw3pP6zF9UTbRt8zr.jpg"
let Blame="https://t3.ftcdn.net/jpg/02/16/02/32/360_F_216023291_8x1p6LyQbHvkP0HEw3pP6zF9UTbRt8zr.jpg"

let Greedy="https://i.swncdn.com/media/800w/cms/CW/family/children/30691-greedy-child-1200.1200w.tn.jpg"

let Fortunate="https://static.toiimg.com/photo/65841708.cms"
let Vanity="https://cdn2.vectorstock.com/i/1000x1000/89/61/proud-man-businessman-vector-6398961.jpg"
let Abundant="http://www.retailprophet.com/wp-content/uploads/2014/12/Abundance1.jpg"
let Abandon="https://www.macmillandictionaryblog.com/wp-content/uploads/2018/03/abandoned-1024x560.jpg"
let Secure="https://www.i-sprint.com/wp-content/uploads/2017/03/lock-pc-450x270.jpg"
let Deteriorate='https://www.shutterstock.com/image-photo/galvanized-sheets-deteriorate-over-time-260nw-2229819339.jpg'
let Privacy="https://indianliberals.in/wp-content/uploads/2020/10/Encoding-Privacy-in-a-Digital-World.png"
let Wonder='https://media.istockphoto.com/id/1213154198/photo/curious-black-child-looking-up-on-white-background.jpg?s=612x612&w=0&k=20&c=otIBNak3LfgsAIliDcKSk-6wutxw9XtgRzbShCp1IZk='

let Reward='https://semoscloud.com/wp-content/uploads/2021/03/employee-rewards-guide-2021.png'

let Feeble='https://friendlystock.com/wp-content/uploads/2018/03/6-feeble-old-woman-with-walker-cartoon-clipart.jpg'

let Ritual='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kalyandi_durga_mondir9.JPG/220px-Kalyandi_durga_mondir9.JPG'

let Weary='https://thumbs.dreamstime.com/b/boy-child-headache-tired-weary-11536076.jpg'

let Interguing='https://i.pinimg.com/222x/cc/a7/f0/cca7f02e1f539767431be3791cec6e4e.jpg'

let Overcome='https://img1.wsimg.com/isteam/ip/f12910c7-b6c3-4667-a0f1-afbd0673c9cb/af64812d-6d42-4f6d-9bb9-4e652638a677.jpg'
let Sympathy='https://www.verywellmind.com/thmb/256i9YRg4jSciw7cDqJjNoSqs1c=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-964766804-5c27c12bc9e77c0001561873.jpg'

let Tolerance='https://cdn.w600.comps.canstockphoto.com/world-of-children-stock-illustration_csp9662598.jpg'

let Crave='https://images.theconversation.com/files/352971/original/file-20200814-20-dskzst.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'

let Insist='https://t3.ftcdn.net/jpg/01/93/10/82/360_F_193108293_4pjgk1MJtn48f5WTmA3L4oNVJf5Q2AQx.jpg'

let Gratify='https://www.shutterstock.com/image-photo/satisfaction-healthy-eating-people-concept-260nw-388200652.jpg'
let Pleased='https://www.shutterstock.com/image-photo/satisfaction-healthy-eating-people-concept-260nw-388200652.jpg'

let Seldom='https://www.thermofisher.com/blog/metals/wp-content/uploads/sites/4/2015/10/raremetal.jpg'

let Rare='https://www.thermofisher.com/blog/metals/wp-content/uploads/sites/4/2015/10/raremetal.jpg'


let Trap='https://thumbs.dreamstime.com/b/cartoon-free-cheese-mousetrap-illustration-61673243.jpg'

let Inspire='https://maxwell.cz/wp-content/uploads/2018/12/Management-of-Motivation-3.jpg'

let Glad='https://static8.depositphotos.com/1007989/1011/i/450/depositphotos_10118085-stock-photo-happy-smiley.jpg'

let Peep='https://i0.wp.com/www.qmeb.com.au/wp-content/uploads/2015/03/peeping-tom.jpg?fit=467%2C492&ssl=1'

let Rope='https://images.unsplash.com/photo-1618609255761-6392d4383957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9wZSUyMGtub3R8ZW58MHx8MHx8&w=1000&q=80'


let Various='https://petapixel.com/assets/uploads/2012/07/flamingo5_mini.jpg'

let Unity='https://thumbs.dreamstime.com/b/business-people-togetherness-corporate-team-unity-concept-67566107.jpg'

let Diversity='https://moderndiplomacy.eu/wp-content/uploads/2021/05/religion-bangladesh.jpg'

let Resemble='https://mnemoenglish.ru/img/englishdom/words/3611_default_240x168.jpg'

let Chew='https://thumbs.gfycat.com/GlassViciousHammerheadbird-size_restricted.gif'

let Empty='https://media.istockphoto.com/id/1296187581/photo/empty-open-cardboard-box-high-angle-view.jpg?b=1&s=170667a&w=0&k=20&c=1oN2DsAEJkydeeYpXpcWCcsShIWOkE9DRACrHeplD_4='
let Vacant='https://media.istockphoto.com/id/1296187581/photo/empty-open-cardboard-box-high-angle-view.jpg?b=1&s=170667a&w=0&k=20&c=1oN2DsAEJkydeeYpXpcWCcsShIWOkE9DRACrHeplD_4='

let Disguise='https://static.toiimg.com/thumb/msid-70230345,width-1070,height-580,imgsize-61649,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'
let Shelter='https://images.all-free-download.com/images/graphiclarge/picnic_shelter_near_black_earth_wisconsin_594768.jpg'

let Admire='https://www.shutterstock.com/image-photo/business-team-clapping-good-presentation-260nw-13785073.jpg'

let Praise='https://www.shutterstock.com/image-photo/business-team-clapping-good-presentation-260nw-13785073.jpg'

let Glorify='https://www.shutterstock.com/image-photo/business-team-clapping-good-presentation-260nw-13785073.jpg'

let Appreciate='https://www.shutterstock.com/image-photo/business-team-clapping-good-presentation-260nw-13785073.jpg'




let Scold='https://img.freepik.com/premium-vector/angry-unhappy-mother-character-scold-her-son-flat-cartoon-illustration_133260-1634.jpg'
let Rebuke='https://img.freepik.com/premium-vector/angry-unhappy-mother-character-scold-her-son-flat-cartoon-illustration_133260-1634.jpg'
let Reprimand='https://img.freepik.com/premium-vector/angry-unhappy-mother-character-scold-her-son-flat-cartoon-illustration_133260-1634.jpg'
let Chastise='https://img.freepik.com/premium-vector/angry-unhappy-mother-character-scold-her-son-flat-cartoon-illustration_133260-1634.jpg'

let Yell='https://teachtaughttaught.files.wordpress.com/2015/03/2054837.jpg'

let Shout='https://teachtaughttaught.files.wordpress.com/2015/03/2054837.jpg'

let Terrified='https://t3.ftcdn.net/jpg/02/76/16/78/360_F_276167879_zqo04O0IIljabUdUaNtk0qojUAjmOnRD.jpg'

let Horrified='https://t3.ftcdn.net/jpg/02/76/16/78/360_F_276167879_zqo04O0IIljabUdUaNtk0qojUAjmOnRD.jpg'

let Scared='https://t3.ftcdn.net/jpg/02/76/16/78/360_F_276167879_zqo04O0IIljabUdUaNtk0qojUAjmOnRD.jpg'

let Cheer='https://media.istockphoto.com/id/1131336509/photo/spectators-cheering-in-stadium.jpg?s=612x612&w=0&k=20&c=urHwyUhQX4sKHSp45cEEdMntz_Xtd9w_8SLwmWilyz8='

let Chanting='http://drvidyahattangadi.com/wp-content/uploads/2018/02/40days1.jpg'

let Wet='https://thumbs.dreamstime.com/b/foggy-window-closeup-shot-steamy-water-drops-abstract-background-close-up-115637235.jpg'

let Blind='https://thumbs.dreamstime.com/z/young-woman-assisting-blind-man-white-stick-street-woman-assisting-blind-man-street-103332493.jpg'

let Drag='https://media.istockphoto.com/id/1158148740/photo/man-dragging-a-big-heavy-key-access-surreal-concept.jpg?s=612x612&w=0&k=20&c=VjEL4O6vunK890ly1aceQ5jfZGROqL7knR3kOEDPqAA='

let Pull='https://media.istockphoto.com/id/1158148740/photo/man-dragging-a-big-heavy-key-access-surreal-concept.jpg?s=612x612&w=0&k=20&c=VjEL4O6vunK890ly1aceQ5jfZGROqL7knR3kOEDPqAA='


let Reconcile ='https://www.shutterstock.com/image-vector/father-tries-reconcile-his-two-260nw-1986772640.jpg'

let Bend='https://www.wonkeedonkeetools.co.uk/media/wysiwyg/PB-Pipe-bending-springs-David/PBS6/PBS-6-6.jpg'

let Deform='https://thumbs.dreamstime.com/z/crushed-green-water-bottle-close-up-189166333.jpg'

let Tolerate='https://images.squarespace-cdn.com/content/v1/534ac38de4b0cbe1acc1d019/1457625173374-XSAXVXM0Q8RLP9LVVF0T/image-asset.jpeg'
let Bear='https://images.squarespace-cdn.com/content/v1/534ac38de4b0cbe1acc1d019/1457625173374-XSAXVXM0Q8RLP9LVVF0T/image-asset.jpeg'
let Endure='https://images.squarespace-cdn.com/content/v1/534ac38de4b0cbe1acc1d019/1457625173374-XSAXVXM0Q8RLP9LVVF0T/image-asset.jpeg'

let Resist='https://change.walkme.com/wp-content/uploads/2018/08/Why-do-employees-resist-change.jpg'

let Convenient='https://thumbs.dreamstime.com/b/isolated-young-business-man-relaxing-chair-29762365.jpg'

let Extensive='https://farmingbase.com/wp-content/uploads/2020/04/farming.jpg'

let Vessel='https://5.imimg.com/data5/UE/HF/RT/SELLER-5525698/steel-utensils-500x500.jpg'

let Utensil='https://5.imimg.com/data5/UE/HF/RT/SELLER-5525698/steel-utensils-500x500.jpg'

let Accumulate='https://img.freepik.com/premium-photo/coins-are-stored-glass-jar-accumulate-finances_191543-1843.jpg'

let Consequences='https://www.shutterstock.com/image-photo/worried-man-observing-domino-collapsing-260nw-1227941614.jpg'

let Avoid='https://images.news18.com/ibnlive/uploads/2021/06/1624515438_shutterstock_336397478.jpg?impolicy=website&width=510&height=356'

let Negligible='https://st4.depositphotos.com/36739758/40798/i/600/depositphotos_407982738-stock-photo-mini-ball-football-floor-foot.jpg'

let Trivial='https://www.multibhashi.com/wp-content/uploads/2017/08/meaning-of-trivial-in-hindi-300x200.jpg'

let Insuficient='https://www.kochiesbusinessbuilders.com.au/wp-content/uploads/2019/05/empty-wallet-cashflow.jpg'
let Enormous='https://media.fugly.com/IMAGES/Interesting/enormous-pumpkin.jpg'

let Adopt='https://images.indianexpress.com/2015/06/child-adoption759.jpg'

let Anticipate='https://sfs.jondon.com/wp-content/uploads/anticipate-problems.jpg'

let Argue='https://cdn.pixabay.com/photo/2018/04/12/04/01/argument-3312463_1280.png' 

let Assume='https://www.wikihow.com/images/thumb/c/ce/Assume-a-Mortgage-Step-2.jpg/v4-460px-Assume-a-Mortgage-Step-2.jpg.webp'

let Borrow='https://www.nationalbusinessmirror.com/wp-content/uploads/2020/09/BORROW.png'

let Hesitate='https://thumbs.dreamstime.com/b/businessmen-hesitate-to-choose-path-decision-concept-vector-illustration-85408979.jpg'

let Irritate='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoP8_Y6353v7ZmOMkoaqlEZjYqqq-WDOF85wzdyLXjw&s'

let Exasperate='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZoP8_Y6353v7ZmOMkoaqlEZjYqqq-WDOF85wzdyLXjw&s'

let Eager='https://www.shutterstock.com/image-photo/little-boy-eager-answer-question-260nw-51122785.jpg'

let Curious='https://news.virginia.edu/sites/default/files/article_image/curiousity_header.jpg'

let Keen='https://www.shutterstock.com/image-photo/little-boy-eager-answer-question-260nw-51122785.jpg'

let Concern="https://cdn.langeek.co/photo/23661/original/"

let Anxiety="https://media.istockphoto.com/id/1155214538/photo/woman-suffering-an-anxiety-attack-alone-in-the-night.jpg?s=612x612&w=0&k=20&c=WD1VwCpBr2pXP5DhEMYy5r6SjGRovgYsbM5YD7KYaQI="

let Describe ="https://www.shutterstock.com/image-photo/long-story-attentive-psychologist-listening-260nw-1135445819.jpg"

let Elaborate='https://previews.123rf.com/images/artursz/artursz1804/artursz180404819/99376516-word-writing-text-tell-me-more-business-concept-for-elaborate-your-business-thoughts-further-for.jpg'

let Drown='https://www.shutterstock.com/shutterstock/photos/370187477/display_1500/stock-photo-drowning-man-in-sea-asking-for-help-with-raised-arms-370187477.jpg'

let Choose='https://static3.depositphotos.com/1006282/208/i/600/depositphotos_2089435-stock-photo-choose-pink.jpg'

let Enhance='https://www.smartvocab.in/common-images/q3bel1ozt8p51zdo.jpg?v=1'

let Fall='https://i.pinimg.com/originals/d6/4c/a1/d64ca158d1b36345db2cc3d0d22f0599.jpg'

let Fly='https://thumbs.dreamstime.com/b/back-to-school-happy-cute-industrious-child-flying-book-background-sunset-sky-concept-education-reading-123217306.jpg'

let Follow='https://media.istockphoto.com/id/153744578/photo/ducks.jpg?b=1&s=170667a&w=0&k=20&c=n6gTRyJ5aM816jmiLBHdzHgYXi4WeMYlkn3k-d7jrrA='

let Forbid='https://www.shutterstock.com/image-photo/sign-no-smoke-260nw-139645376.jpg'

let Forget='https://www.theweek.in/content/dam/week/magazine/health/more/2017/image/37cerebralmatter2.jpg'

let Forgive='https://images.unsplash.com/photo-1505189014261-0148f9aefa85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZ2l2ZW5lc3N8ZW58MHx8MHx8&w=1000&q=80'

let Explore='https://news.virginia.edu/sites/default/files/article_image/curiousity_header.jpg'

let Gather='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VhULZdRg6J2BHoVN7lU0LMlCmXD2i7Rw_-h9uShonG8p1ajnBmArQY0w_ehmrFd6zlg&usqp=CAU'

let Grow='https://media.tenor.com/CHhuscGswDAAAAAC/planting-plants.gif'

let Grasp='https://st3.depositphotos.com/8776626/33633/i/600/depositphotos_336336012-stock-photo-bebe.jpg'
let Hold='https://st3.depositphotos.com/8776626/33633/i/600/depositphotos_336336012-stock-photo-bebe.jpg'

let Glance='https://thumbs.gfycat.com/QuerulousKindHound-size_restricted.gif'
let Glimpse='https://thumbs.gfycat.com/QuerulousKindHound-size_restricted.gif'

let Guide='https://media.tenor.com/vMPnnX5129wAAAAC/tour-guide-tour.gif'

let Mentor='https://www.thebalancemoney.com/thmb/A_uhaT0yyVle46Bfki8domRJ9Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/colleagues-business-woman-working-978531556-b538d8fc0ddc492db50b9189235b2bc8.jpg'

let Give_Up='https://static.vecteezy.com/system/resources/previews/000/464/399/original/businessman-and-pickaxe-give-up-for-money-mining-failure-business-concept-vector.jpg'

let Guess='https://nationaltoday.com/wp-content/uploads/2022/01/take_a_guess.jpg'

let Hang='https://cdn.hswstatic.com/gif/hangupsidedown-1.jpg'

let Hug='https://www.icegif.com/wp-content/uploads/hug-icegif-3.gif'

let Hurry='https://media.tenor.com/TGCjS1jw2v4AAAAd/hurrying-rushing.gif'

let Ignore='https://www.shutterstock.com/image-photo/attractive-woman-being-ignored-stopped-260nw-320741366.jpg'

let Justify='https://thumbs.dreamstime.com/z/young-man-justifying-himself-front-elderly-adult-females-his-hands-up-showing-palms-caucasian-beardy-224073549.jpg'

let Keep='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmMwMTlkNTc4YzRhZWE2YjBjYTdmMWYyODc1MWZiYmZhNmM3ZmU5OCZjdD1n/jSuu6dQWhSEQE/giphy.gif'
let Lay='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmMwMTlkNTc4YzRhZWE2YjBjYTdmMWYyODc1MWZiYmZhNmM3ZmU5OCZjdD1n/jSuu6dQWhSEQE/giphy.gif'
Diversity
let Lead='https://media.tenor.com/vMPnnX5129wAAAAC/tour-guide-tour.gif'

let Lean='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGUyNjdhNjY3ODYzZTE5ZTY0ODgyMzQ0ODBkMzNiMzhlNTU0ZmI4NyZjdD1n/lGkUyj3IrEcvu/giphy.gif'


let Leave='https://cdn.xxl.thumbs.canstockphoto.com/unhappy-man-and-angry-woman-leaving-after-quarrel-unhappy-woman-in-focus-crying-and-angry-man-stock-image_csp16338960.jpg'

let Observe='https://news.virginia.edu/sites/default/files/article_image/curiousity_header.jpg'

let Obtain='https://thumbs.dreamstime.com/b/young-woman-getting-keys-to-new-apartment-realtor-family-buys-rents-house-customers-renters-buy-rent-real-estate-close-up-130101470.jpg'
let Get='https://thumbs.dreamstime.com/b/young-woman-getting-keys-to-new-apartment-realtor-family-buys-rents-house-customers-renters-buy-rent-real-estate-close-up-130101470.jpg'

let Recall='https://media.tenor.com/vKMxaaYIiHYAAAAM/sitting-at-home-remembering-the-school-memories-alone.gif'
let Remember='https://media.tenor.com/vKMxaaYIiHYAAAAM/sitting-at-home-remembering-the-school-memories-alone.gif'

let Refuse='https://images.news18.com/ibnlive/uploads/2021/06/1624515438_shutterstock_336397478.jpg?impolicy=website&width=510&height=356'


let Regret='https://ychef.files.bbci.co.uk/1600x900/p0d808l6.webp'


let Require='https://assets.justinmind.com/wp-content/uploads/2020/11/validate-requirements-prototyping.png'

let Satisfy='https://www.shutterstock.com/image-photo/satisfaction-healthy-eating-people-concept-260nw-388200652.jpg'

let Serve='https://media.tenor.com/KqpUf9KDpaAAAAAC/serving-server.gif'

let Survive='https://www.shutterstock.com/image-illustration/business-umbrella-held-by-businessman-260nw-1511553029.jpg'

let Squeeze='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxG_68sSHojIxayCYxBQ8nxpZWkOt9oyiOsw&usqp=CAU'

let Swell='https://sanaramedtech.com/wp-content/uploads/2022/05/sanara33-1024x606.jpg'

let Swallow='https://i.ytimg.com/vi/ehWwzPhADoI/maxresdefault.jpg'

let Culprit='https://www.shutterstock.com/image-photo/prisoner-man-jail-handcuffs-close-260nw-1799947228.jpg'

let Pair='https://i.ebayimg.com/images/g/YT0AAOSwi7Fjf2rL/s-l500.jpg'

let Quit='https://previews.123rf.com/images/prettyvectors/prettyvectors1603/prettyvectors160300096/54243374-never-give-up-vector-flat-cartoon-illustration.jpg'

let Vanish='https://media.tenor.com/SY9aCg2xasIAAAAM/bye-poof.gif'

let Wear='https://media.tenor.com/xsHm9bXUX6cAAAAC/shirt-shirt-on.gif'

let Impair='https://www.shutterstock.com/image-photo/businessman-hand-stops-domino-continuous-260nw-1426532582.jpg'

let Beverage='https://thumbs.dreamstime.com/z/cans-beverages-19492376.jpg'



let Guilty='https://www.shutterstock.com/image-photo/prisoner-man-jail-handcuffs-close-260nw-1799947228.jpg'

let Faith='https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/34246/images/eXw3QIQ1QiqUMs1bDV5l_Faith_2.jpg'

let Jelous='https://image.marriage.com/advice/wp-content/uploads/2019/01/What-Is-Really-Behind-Jealousy-6-Common-Causes.jpg'

let Religion='https://moderndiplomacy.eu/wp-content/uploads/2021/05/religion-bangladesh.jpg'

let Trust='https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/2019-09/shutterstock_1142027084.jpg?itok=cZzs0wco'

let Quarrel='https://cdn.pixabay.com/photo/2018/04/12/04/01/argument-3312463_1280.png' 
let Dispute='https://cdn.pixabay.com/photo/2018/04/12/04/01/argument-3312463_1280.png' 

let Roof='https://img.freepik.com/free-photo/vertical-low-angle-closeup-shot-black-roof-building_181624-10654.jpg'

let Stretch='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6a56e759-c201-4084-9a4f-f1af42bdcfa3/db1qxea-37be593b-9ed7-42c5-8b33-5239af1d2e07.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhNTZlNzU5LWMyMDEtNDA4NC05YTRmLWYxYWY0MmJkY2ZhM1wvZGIxcXhlYS0zN2JlNTkzYi05ZWQ3LTQyYzUtOGIzMy01MjM5YWYxZDJlMDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.30eQpWYOc5RnijYdy-ReZIumRcL9XjQv5-X_ph_ErzI'

let Clap='https://media.tenor.com/XUAONVsG6qIAAAAM/leonardo-dicaprio-clapping.gif'

let Wander='https://media.tenor.com/Z6eaFDppNqgAAAAC/wandering-outer-range.gif'

let Pardon='https://images.unsplash.com/photo-1505189014261-0148f9aefa85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZ2l2ZW5lc3N8ZW58MHx8MHx8&w=1000&q=80'

let Swear='https://www.shutterstock.com/image-photo/witness-swearing-on-bible-telling-600w-244316848.jpg'

let Prison='https://media.istockphoto.com/id/1138187706/vector/a-symbol-of-a-criminals-incarceration-with-a-man-imprisoned-in-a-cell.jpg?s=612x612&w=0&k=20&c=czcqZ7lL502PoKgO__jrzMB7u9yaT8yr7p77tIm_yec='

let Futile='https://www.shutterstock.com/image-illustration/act-futility-woman-lake-ocean-260nw-1943463127.jpg'

let Excruciating='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe7hCbhM5kZ2r3Tx0MOX6KFmLqxJXfBYw3b8EIY07xnF8ZtPLS' 

let Capture='https://media.tenor.com/0OOY5G4MkjUAAAAC/cats-box.gif'

let Expel='https://www.shutterstock.com/image-vector/vector-cartoon-stick-figure-drawing-260nw-1451079776.jpg'

let intialRightScore
let intialWrongScore

Yell
// for right score
if(sessionStorage.getItem('rightScore')==0){
    intialRightScore=0
    rightScoreValue.textContent=intialRightScore
}
else(
    intialRightScore=sessionStorage.getItem('rightScore')
)

// for worng score

if(sessionStorage.getItem('wrongScore')==0){
    intialWrongScore=0
    wrongScoreValue.textContent=intialWrongScore
}
else(
    intialWrongScore=sessionStorage.getItem('wrongScore')
)

rightScoreValue.textContent=0
wrongScoreValue.textContent=0

let retrievedRightScore=sessionStorage.getItem('rightScore')
let retrievedWrongScore=sessionStorage.getItem('wrongScore')
// adding rightScore to the session storage
if(retrievedRightScore===null){
    var scoreValueRight=0
    sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
}
else{
    scoreValueRight=JSON.parse(retrievedRightScore)
    rightScoreValue.textContent=scoreValueRight
}

// adding wrongScore to the session storage

if(retrievedWrongScore===null){
    var scoreValueWrong=0
    sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
}
else{
    scoreValueWrong=JSON.parse(retrievedWrongScore)
    wrongScoreValue.textContent=scoreValueWrong
}
// vocabulary array
let vocabArray=["Whisper","Annoy","Yawn","Consent","Plead","Provide","Abstain","Vain","Storm",
    "Compulsion","Neglect","Resolve","Lick","Courage","Inevitable",'Sneeze','Begger','Disaster',
    'Distraught',"Economical", "Emphasize",'Endure',"Extravagant","Fire",'Gigantic','Impatience',
    'Lack','Loot','Miser','Persuade','Reduce','Sacrifice','Seek','Strength',"Suffer","Summon",
    "Unpleasant","Blunder",'Patience','Deaf', "Condemn", "Fortunate",'Vanity','Abundant','Abandon',
    'Secure','Deteriorate','Privacy','Wonder','Reprimand','Reward', 'Feeble','Ritual','Weary',
    'Interguing','Sympathy','Tolerance','Crave','Insist','Gratify','Seldom','Trap','Inspire','Glad',
    'Peep','Rope', 'Various','Unity','Diversity','Resemble','Chew','Empty','Shelter','Admire','Scold',
    'Yell','Terrified','Cheer','Chanting','Wet','Blind','Drag','Reconcile','Bend','Deform','Tolerate',
    'Resist','Convenient','Extensive','Vessel', 'Accumulate','Consequences','Avoid', 'Negligible', 
    'Adopt','Anticipate','Argue','Assume','Borrow','Hesitate','Irritate','Approval','Exasperate',
    'Mumble','Gale','Horrified' ,'Scared', 'Rare' ,'Praise', 'Glorify','Pull','Insuficient', 'Trivial',
    'Eager','Curious','Keen','Appreciate','Vacant','Disguise','Rebuke','Chastise','Bear','Criticize',
    'Blame','Describe', 'Elaborate','Pleased','Stingy','Greedy','Drown','Choose','Enhance','Fall','Fly',
    'Follow','Forbid','Forget','Forgive','Explore',  'Gather','Grow',
    'Grasp','Hold','Glance','Glimpse','Guide','Mentor','Give_Up','Guess','Hang'
    ,'Hug','Hurry','Ignore','Justify','Keep','Lay','Lead','Leave',
    'Observe','Obtain','Get','Recall','Remember','Refuse','Regret','Require','Satisfy','Serve',
    'Survive','Squeeze','Swell','Swallow','Culprit',
    'Pair','Quit','Vanish','Wear','Impair','Beverage','Accord','Scarcity','Deficiency',"Guilty",
    "Faith","Jelous","Religion","Trust","Quarrel","Dispute","Roof","Stretch","Clap",
    "Wander","Pardon","Swear","Prison","Futile","Excruciating","Capture","Expel"

]

let ArrayOfImages=[Whisper,Annoy,Yawn,Consent,Plead,Provide,Abstain,Vain,Storm,
    Compulsion,Neglect,Resolve,Lick,Courage,Inevitable,Sneeze,Begger,Disaster,Distraught,Economical,Emphasize,Endure,Extravagant,
    Fire,Gigantic,Impatience,Lack,Loot,Miser,Persuade,Reduce,Sacrifice,Seek,Strength,Suffer,Summon,Unpleasant,Blunder,Patience,Deaf,
    Condemn, Fortunate,Vanity,Abundant,Abandon,Secure,Deteriorate,Privacy,Wonder,Reprimand,Reward,Feeble,
   Ritual,Weary,Interguing,Sympathy,Tolerance,Crave,Insist,Gratify,Seldom,Trap,Inspire,Glad,Peep,Rope,Various,Unity,
    Diversity,Resemble,Chew,Empty,Shelter,Admire,Scold,Yell,Terrified,Cheer,Chanting,Wet,Blind,Drag,
    Reconcile,Bend,Deform,Tolerate,Resist,Convenient,Extensive,Vessel,Accumulate,Consequences,Avoid,Negligible,
    Adopt,Anticipate,Argue,Assume,Borrow,Hesitate,Irritate,Approval,Exasperate,Mumble,Gale,Horrified,Scared, Rare ,Praise,
    Glorify,Pull,Insuficient, Trivial,Eager,Curious,Keen,Appreciate,Vacant,Disguise,Rebuke,Chastise,Bear,Criticize,Blame,Describe,
    Elaborate,Pleased,Stingy,Greedy,Drown,Choose,Enhance,Fall,Fly,Follow,Forbid,Forget,Forgive,Explore,Gather,Grow,
    Grasp,Hold,Glance,Glimpse,Guide,Mentor,Give_Up,Guess,Hang,Hug,Hurry,Ignore,Justify,Keep,Lay,Lead,Leave,
    Observe,Obtain,Get,Recall,Remember,Refuse,Regret,Require,Satisfy,Serve,Survive,Squeeze,Swell,Swallow,Culprit,
    Pair,Quit,Vanish,Wear,Impair,Beverage,Accord,Scarcity,Deficiency,Guilty,Faith,Jelous,Religion,Trust,
    Quarrel,Dispute,Roof,Stretch,Clap,Wander,Pardon,Swear,Prison,Futile,Excruciating,Capture,Expel
]



console.log(ArrayOfImages.length)
console.log(vocabArray.length)


let a2=0
let b2=ArrayOfImages.length-1


let random2=Math.round(a2+(b2-a2)*Math.random())

let random3=Math.round(a2+(b2-a2)*Math.random())

let random4=Math.round(a2+(b2-a2)*Math.random())

let random5=Math.round(a2+(b2-a2)*Math.random())




let mainInterval= setInterval(() => {
    if(ArrayOfImages[random2]!=ArrayOfImages[random3] && ArrayOfImages[random2]!=ArrayOfImages[random4] && ArrayOfImages[random2]!=ArrayOfImages[random5] && ArrayOfImages[random3]!=ArrayOfImages[random4] && ArrayOfImages[random3]!=ArrayOfImages[random5] && ArrayOfImages[random4]!=ArrayOfImages[random5]){
        clearInterval(mainInterval)
    }


    else{
        random2=Math.round(a2+(b2-a2)*Math.random())
        random3=Math.round(a2+(b2-a2)*Math.random())
        random4=Math.round(a2+(b2-a2)*Math.random())
        random5=Math.round(a2+(b2-a2)*Math.random())
    }

    
    
}, 10);




setTimeout(() => {
    let randomArray=[random2,random3,random4,random5]
    let a6=0
    let b6=3
   let random6=Math.round(a6+(b6-a6)*Math.random())
       mainWord.textContent=vocabArray[randomArray[random6]]   
       wordNumber.textContent=randomArray[random6]+1
    let Image1=document.createElement('img')
    Image1.setAttribute('src',ArrayOfImages[random2])
    Image1.setAttribute('id',vocabArray[random2])
    imagesId.appendChild(Image1)
    
    let Image2=document.createElement('img')
    
    Image2.setAttribute('src',ArrayOfImages[random3])
    Image2.setAttribute('id',vocabArray[random3])
    imagesId.appendChild(Image2)
    
    let Image3=document.createElement('img')
    
    Image3.setAttribute('src',ArrayOfImages[random4])
    Image3.setAttribute('id',vocabArray[random4])
    imagesId.appendChild(Image3)
    
    let Image4=document.createElement('img')
    Image4.setAttribute('src',ArrayOfImages[random5])
    Image4.setAttribute('id',vocabArray[random5])
    imagesId.appendChild(Image4)

  
    console.log(random2)
    console.log(random3)
    console.log(random4)
    console.log(random5)
    console.log(ArrayOfImages[99])
    let err=document.createElement('p')

    Image1.addEventListener('click',()=>{
        if(Image1.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight

           setTimeout(() => {
            window.location.reload()
           }, 2000);
        }
    
        else if(Image1.id!=mainWord.textContent){
            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

    
   

    Image2.addEventListener('click',()=>{
        if(Image2.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               }, 2000);
        }
    
        else if(Image2.id!=mainWord.textContent){

            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })


    Image3.addEventListener('click',()=>{
        if(Image3.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               },2000);
        }
    
        else if(Image3.id!=mainWord.textContent){

            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

    Image4.addEventListener('click',()=>{
        if(Image4.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               }, 2000);
        }
    
        else if(Image4.id!=mainWord.textContent){
            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

 
    
   }, 500);
    


   

