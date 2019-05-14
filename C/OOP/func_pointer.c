#include<stdio.h>
#include<windows.h>

typedef void(*handler_t)(void);

static void timer(handler_t handler);
static void timer_callback(void);

int main(void) {
	timer(timer_callback);
}

static void timer_callback(void) {
	printf("\ncallback!");
}

static void timer(handler_t handler) {
	printf("I'll use...");

	while (1) {
		handler();
		Sleep(1000);
	}
}