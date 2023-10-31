import java.util.Scanner;

public class ThirdQuestion {
    public static boolean isPangram(String str) {

        str = str.toLowerCase();

        if (str.length() < 26) {
            return false;
        } else {
            for (char ch = 'a'; ch <= 'z'; ch++) {
                if (str.indexOf(ch) < 0) {
                    return false;
                }
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter an String: ");
        String str = sc.nextLine();

        if (isPangram(str)) {
            System.out.println("The input string is a pangram.");
        } else {
            System.out.println("The input string is not a pangram.");
        }
        sc.close();

    }

}
