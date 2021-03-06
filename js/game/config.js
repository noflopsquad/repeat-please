DEBUG = true;

//SCREEN SIZE
SCREEN_WIDTH = 1200;
SCREEN_HEIGHT = 600;

//GAME PATH
GAME_PATH = 'js/game/';

//ASSETS
COMMON_ASSETS = 'assets/';

AUDIO_ASSETS = COMMON_ASSETS + 'audio/';
BACKGROUND_ASSETS = COMMON_ASSETS + 'backgrounds/';
BUTTON_ASSETS = COMMON_ASSETS + 'buttons/';
CHARS_ASSETS = COMMON_ASSETS + 'characters/';
DIALOGS_ASSETS = COMMON_ASSETS + 'dialogs/';
FONTS_ASSETS = COMMON_ASSETS + 'fonts/';
TIMERS_ASSETS = COMMON_ASSETS + 'timers/';

NOKIA_BLACK_NAME = 'nokia_black';
NOKIA_BLACK_PATH = FONTS_ASSETS + 'nokia16black.png';
NOKIA_BLACK_ATLAS = FONTS_ASSETS + 'nokia16black.xml';

NOKIA_WHITE_NAME = 'nokia_white';
NOKIA_WHITE_PATH = FONTS_ASSETS + 'nokia.png';
NOKIA_WHITE_ATLAS = FONTS_ASSETS + 'nokia.xml';

DEFAULT_DIALOG_FONT = NOKIA_BLACK_NAME;
DEFAULT_FONT_SIZE = 30;
HUGE_FONT_SIZE = 60;

BLACKBOARD_TEXT_POSITION_X = 350;
BLACKBOARD_TEXT_POSITION_Y = 100;

SENTENCES_ATLAS = 'assets/audio/sentences.ogg';
KEYWORDS_ATLAS = 'assets/audio/sentences.ogg';
SOUND_EFFECTS_ATLAS = 'assets/audio/sound_effects.ogg';

NORMAL_COUNTDOWN_TONE = 'normal_countdown_tone';
FINAL_COUNTDOWN_TONE = 'final_countdown_tone';

//BACKGROUNDS
BACKGROUND_NAME = 'background';
BACKGROUND_PATH = BACKGROUND_ASSETS + 'backgrounds.png';
BACKGROUND_ATLAS = BACKGROUND_ASSETS + 'backgrounds.json';

BACKGROUND_CLASSROOM_NAME = 'classroom';
BACKGROUND_FADER_NAME = 'transparent_layer';
BACKGROUND_BLACKBOARD_NAME = 'blackboard';

BACKGROUND_POSITION_X = 0;
BACKGROUND_POSITION_Y = 0;

//TEACHER
TEACHER_NAME = 'teacher';
TEACHER_PATH = CHARS_ASSETS + 'teacher/' + 'teacher.png';
TEACHER_ATLAS = CHARS_ASSETS + 'teacher/' + 'teacher.json';

TEACHER_HELLO = 'hello';
TEACHER_HINT = 'hint';
TEACHER_POINTING = 'say_this';
TEACHER_WELL_DONE = 'well_done';
TEACHER_YOUR_TURN = 'your_turn';

//MICRO
MICRO_NAME = 'micro';
MICRO_PATH = AUDIO_ASSETS + 'micro/' + 'micro.png';
MICRO_ATLAS = AUDIO_ASSETS + 'micro/' + 'micro.json';

MICRO_OFF = 'off';
MICRO_ON_NO_DETECTION = 'on_no_detection';
MICRO_ON_DETECTION = 'on_voice_detection';

//TIMERS
TIMER_NAME = 'timer';
TIMER_PATH = TIMERS_ASSETS + 'timer.png';
TIMER_ATLAS = TIMERS_ASSETS + 'timer.json';

TIMER_BAR_NAME = 'bar';
TIMER_BACKGROUND_NAME = 'background';

COUNTDOWN_3_NAME = '3';
COUNTDOWN_2_NAME = '2';
COUNTDOWN_1_NAME = '1';
COUNTDOWN_GO_NAME = 'go';

COUNTDOWN_ANIMATION_X = SCREEN_WIDTH / 3;
COUNTDOWN_ANIMATION_Y = SCREEN_HEIGHT / 4;

//DIALOG BUBBLE
DIALOG_NAME = 'dialog';
DIALOG_PATH = DIALOGS_ASSETS + 'dialogs.png';
DIALOG_ATLAS = DIALOGS_ASSETS + 'dialogs.json';

BIG_SQUARE_DIALOG_NAME = 'big_square';
BIG_SQUARE_DIALOG_WIDTH = 570;
BIG_SQUARE_DIALOG_POSITION_X = 320;
BIG_SQUARE_DIALOG_POSITION_Y = 40;
BIG_SQUARE_DIALOG_CONTENT_OFFSET = 30;
BIG_SQUARE_DIALOG_CONTENT_X = BIG_SQUARE_DIALOG_POSITION_X + BIG_SQUARE_DIALOG_CONTENT_OFFSET;
BIG_SQUARE_DIALOG_CONTENT_Y = BIG_SQUARE_DIALOG_POSITION_Y + BIG_SQUARE_DIALOG_CONTENT_OFFSET;

BOTTOM_DIALOG_NAME = 'bottom';
BOTTOM_DIALOG_POSITION_X = 0;
BOTTOM_DIALOG_POSITION_Y = 0;
BOTTOM_DIALOG_CONTENT_X = 350;
BOTTOM_DIALOG_CONTENT_Y = 480;

SMALL_DIALOG_NAME = 'small';
SMALL_DIALOG_POSITION_X = 0;
SMALL_DIALOG_POSITION_Y = 0;
SMALL_DIALOG_CONTENT_X = 350;
SMALL_DIALOG_CONTENT_Y = 155;

BLACK_PLAIN_NAME = 'dark_plain';
BLACK_PLAIN_DIALOG_POSITION_X = 0;
BLACK_PLAIN_DIALOG_POSITION_Y = 0;
BLACK_PLAIN_DIALOG_WIDTH = SCREEN_WIDTH;
BLACK_PLAIN_DIALOG_HEIGHT = 50;

HINT_DIALOG_NAME = 'hint';

STATEMENT_DIALOG_NAME = 'statement';


//BUTTONS
BUTTONS_SPRITESHEET = 'buttons';
BUTTONS_ATLAS = BUTTON_ASSETS + 'buttons.png';
BUTTONS_WIDTH = 224;
BUTTONS_HEIGHT = 50;
BUTTON_NORMAL = 2;
BUTTON_HOVER = 1;
BUTTON_CLICK = 1;

BUTTONS_FONT = NOKIA_BLACK_NAME;
BUTTONS_FONT_SIZE = 20;

DEFAULT_BUTTON_CONTENT = '> ';

//ALPHA VALUES
TRANSPARENT = 0;
OPAQUE = 1;
