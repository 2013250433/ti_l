package myspring.di.xml;

public class StringPrinter implements Printer{
	
	private StringBuffer buffer = new StringBuffer();
	
	@Override
	public void print(String message) {
		buffer.append(message);
	}
	
	public String toString() {
		return buffer.toString();
	}

}
