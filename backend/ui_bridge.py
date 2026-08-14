def create_ui_action(validated_result):

    if not validated_result["success"]:
        return validated_result

    action = validated_result["action"]

    tool = action["tool"]

    if tool == "open_project":

        return {
            "success": True,
            "action": {
                "type": "open_project",
                "project": action["project"]
            }
        }

    if tool == "open_resume":

        return {
            "success": True,
            "action": {
                "type": "open_resume"
            }
        }

    if tool == "list_skills":

        return {
            "success": True,
            "action": {
                "type": "list_skills"
            }
        }

    if tool == "open_experience":

        return {
            "success": True,
            "action": {
                "type": "open_experience"
            }
        }

    if tool == "search_portfolio":

        return {
            "success": True,
            "action": {
                "type": "search_portfolio"
            }
        }

    return {
        "success": False,
        "error": "Unknown UI action"
    }