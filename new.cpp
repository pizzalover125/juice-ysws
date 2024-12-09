#include <iostream>
using namespace std;

class Complex {
    float real;
    float imag;
public:
    Complex() : real(0), imag(0) {}

    Complex(float value) : real(value), imag(value) {}

    Complex(float r, float i) : real(r), imag(i) {}

    Complex add(const Complex& c) const {
        return Complex(real + c.real, imag + c.imag);
    }

    void display() const {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    float real1, imag1, real2, imag2;

    cout << "Enter real part of first complex number: ";
    cin >> real1;
    cout << "Enter imaginary part of first complex number: ";
    cin >> imag1;

    cout << "Enter real part of second complex number: ";
    cin >> real2;
    cout << "Enter imaginary part of second complex number: ";
    cin >> imag2;

    Complex c1(real1, imag1); 
    Complex c2(real2, imag2);

    Complex c3 = c1.add(c2);

    cout << "First complex number: ";
    c1.display();
    cout << "Second complex number: ";
    c2.display();
    cout << "Sum of complex numbers: ";
    c3.display();

    return 0;
}