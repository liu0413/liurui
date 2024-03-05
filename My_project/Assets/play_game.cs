using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class play_game : MonoBehaviour
{
    public GameObject objectToSpawn;
    public Transform parentTransform;
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void OnClick()
    {
        Debug.Log("Button Clicked!"); // 在点击按钮时输出日志
        // 在这里添加您想要执行的操作
        GameObject game_object = Instantiate(objectToSpawn, transform.position, transform.rotation);
        game_object.SetActive(true);
        game_object.transform.SetParent(parentTransform);
        game_object.transform.position = objectToSpawn.transform.position;
    }
}
