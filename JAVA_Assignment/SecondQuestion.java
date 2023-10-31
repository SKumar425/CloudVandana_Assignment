import java.util.Scanner;

public class SecondQuestion {

    public static int NumValue(char ch) {
        if (ch == 'I')
            return 1;
        if (ch == 'V')
            return 5;
        if (ch == 'X')
            return 10;
        if (ch == 'L')
            return 50;
        if (ch == 'C')
            return 100;
        if (ch == 'D')
            return 500;
        if (ch == 'M')
            return 1000;
        return -1;
    }

    public static int romanToInteger(String str) {
        int sum = 0;
        for (int i = 0; i < str.length(); i++) {
            int s1 = NumValue(str.charAt(i));
            if (i + 1 < str.length()) {
                int s2 = NumValue(str.charAt(i + 1));
                if (s1 >= s2) {
                    sum = sum + s1;
                } else {
                    sum = sum - s1;
                }
            } else {
                sum = sum + s1;
            }
        }
        return sum;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Roman Number: ");
        String inputRoman = sc.nextLine();
        System.out.println("The Integer value of given Roman number is: " + romanToInteger(inputRoman));
        sc.close();

    }
}
