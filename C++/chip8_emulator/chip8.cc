#include <cstdio>
#include <stdint.h>
#include <memory>

class Chip8 {
public:
	bool ReadMemoryImage(const char *fname);

	 uint8_t mem[4096]{};
	 uint8_t v[16]{};
	 uint16_t i{};
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

	return 0;
}

//51:11