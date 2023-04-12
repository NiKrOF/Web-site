package StudyShop.session;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Component
public class SessionStorage
{
    private Map<String, Cart> SessionsMap;

    public SessionStorage()
    {
        SessionsMap = new HashMap<>();
    }

    public Cart GetData(String sessionId)
    {
        Cart data = SessionsMap.get(sessionId);

        if(data == null)
        {
            data = new Cart();
            SessionsMap.put(sessionId, data);
        }

        return data;
    }
}
