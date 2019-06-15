#include <cstdio>
#include <stdint.h>
#include <memory>
#include <cstdlib>
#include <SDL2/SDL.h>
const int PIXEL_SIZE = 16;

class Chip8 {
public:
	bool ReadMemoryImage(const char *fname);
	void Reset();

	 uint8_t mem[4096]{};
	 uint8_t v[16]{}; //v0~vF
	 uint16_t i{};
	 uint16_t pc{};
};

// https://dev.krzaq.cc/post/you-dont-need-a-stateful-deleter-in-your-unique_ptr-usually/
struct FileDeleter
{
    void operator()(FILE* ptr) const {
        fclose(ptr);
    }
};

bool Chip8::ReadMemoryImage(const char *fname){
	//FILE *f = fopen(fname, "rb");
	std::unique_ptr<FILE, FileDeleter> f;
	//raii
	f.reset(fopen(fname,"rb"));
	
	if(f == nullptr){
		return false;
	}

	return (fread(mem+512, 1, 4096-512,f.get())) > 0;
}

void Reset(){

	memset(mem,0,sizeof(mem));


	for(int i=0;i<16;i++){
		v[i] = 0;
	}

	pc = 0x512;
	
	this->i = 0;

	//TODO: add timer initialization
}

int main(int argc, char **argv){
	if(argc != 2){
		puts("usage chip8 <filename>");
		return 1;
	}


	auto vm = std::make_unique<Chip8>();
	if (!vm->ReadMemoryImage(argv[1])){
		puts("failed to read RAM image");
		return 2;
	}

	// https://www.willusher.io/sdl2%20tutorials/2013/08/17/lesson-1-hello-world
	if (SDL_Init(SDL_INIT_VIDEO | SDL_INIT_AUDIO | SDL_INIT_TIMER | SDL_INIT_EVENTS) != 0){
		puts("SDL failed")
		return 3;
	}

	SDL_Window *win = SDL_CreateWindow("CHIP8", SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, 64 * PIXEL_SIZE, PIXEL_SIZE, SDL_WINDOW_SHOWN);
	if (win == nullptr){
		std::cout << "SDL_CreateWindow Error: " << SDL_GetError() << std::endl;
		SDL_Quit();
		return 4;
	}

	SDL_Renderer *ren = SDL_CreateRenderer(win, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);
	if (ren == nullptr){
		puts("SDL failed");
		SDL_DestroyWindow(win);
		SDL_Quit();
		return 1;
	}

	getchar();

	SDL_DestroyRenderer(ren);
	SDL_DestroyWindow(win);
	SDL_Quit();

	return 0;
}

//1:14:38